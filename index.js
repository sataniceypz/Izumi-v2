const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  Browsers,
  fetchLatestBaileysVersion,
  delay,
  loadSession,
  makeCacheableSignalKeyStore,
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const path = require("path");
const pino = require("pino");
const config = require("./config");
const {
  loadMessage,
  saveMessage,
  saveChat,
} = require("./lib/database/store");
const { Message, commands, numToJid, sudoIds, PREFIX } = require("./lib/index");
const { serialize } = require("./lib/serialize");
const { MakeSession } = require("./lib/session");
const { PluginDB } = require("./lib/database/plugins");
const Greetings = require("./lib/Greetings");
const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});
// Set global variable for base directory
global.__basedir = __dirname;

// Function to read and require JavaScript files from a directory
const readAndRequireFiles = async (directory) => {
  try {
    const files = await fs.promises.readdir(directory);
    return Promise.all(
      files
        .filter((file) => path.extname(file).toLowerCase() === ".js")
        .map((file) => require(path.join(directory, file)))
    );
  } catch (error) {
    console.error("Error reading and requiring files:", error);
    throw error; // Rethrow the error for higher-level handling
  }
};

// Main function to connect and initialize
async function initialize() {
  console.log("WhatsApp Bot Initializing...");

  try {
    // Read and require database files
    await readAndRequireFiles(path.join(__dirname, "/lib/database"));

    // Sync database
    await config.DATABASE.sync();
    console.log("Database synchronized.");

    // Read and require plugin files
    console.log("Installing Plugins...");
    await readAndRequireFiles(path.join(__dirname, "/plugins"));
    console.log("Plugins Installed!");

    // Connect to WhatsApp
    await connectToWhatsApp();
  } catch (error) {
    console.error("Initialization error:", error);
    process.exit(1); // Exit with error status
  }
} 

// Function to connect to WhatsApp
async function connectToWhatsApp() {
if (!fs.existsSync("./lib/session/creds.json")) {
  MakeSession(config.SESSION_ID, "lib/session", "mongodb+srv://eypzbuddy:cmoflChJCdpd94EE@izumi-eypz.vwpdjxv.mongodb.net/?retryWrites=true&w=majority&appName=izumi-eypz").then(
    console.log("Vesrion : " + require("./package.json").version)
  );
}
  try {
    console.log("Connecting to WhatsApp...");
      const { state, saveCreds } = await useMultiFileAuthState(
  "./lib/session" ,
    pino({ level: "silent" })
  );
    const { version } = await fetchLatestBaileysVersion();
    const client = makeWASocket({
      logger,
      printQRInTerminal: true,
      downloadHistory: false,
      syncFullHistory: false,
      browser: Browsers.macOS("Desktop"),
      auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, logger),
      },
      version,
    });
       client.ev.on("connection.update", async (node) => {
      const { connection, lastDisconnect } = node;
      if (connection === "open") {
        console.log("Connected to WhatsApp.");
        const sudo = numToJid(config.SUDO.split(",")[0]) || client.user.id;
        await client.sendMessage(sudo, {
          text: `*BOT CONNECTED*\n\nPREFIX: ${PREFIX}\nPLUGINS: ${
            commands.filter((command) => command.pattern).length
          }\nVERSION: ${require("./package.json").version}`,
        });
      }
      if (
        connection === "close" &&
        lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
      ) {
        console.log("Reconnecting...");
        await delay(300);
        connectToWhatsApp();
      } else if (connection === "close") {
        console.log("Connection closed.");
        await delay(3000);
        process.exit(0);
      }
    });

    client.ev.on("creds.update", saveCreds);

    client.ev.on("messages.upsert", async (upsert) => {
      if (!upsert.type === "notify") return;
      msg = upsert.messages[0];
    await serialize(JSON.parse(JSON.stringify(msg)), client);
     await saveMessage(upsert.messages[0], msg.sender);
      if (!msg.message) return;
      const message = new Message(client, msg);
      if (config.LOG_MSG && !message.data.key.fromMe)
        console.log(
          `[MESSAGE] [${message.pushName || message.sender.split("@")[0]}] : ${
            message.text || message.type || null
          }`
        );
      if (
        config.READ_MSG == true &&
        message.data.key.remoteJid !== "status@broadcast"
      )
        await client.readMessages([message.data.key]);
      commands.map(async (command) => {
        const messageType = {
          image: "imageMessage",
          sticker: "stickerMessage",
          audio: "audioMessage",
          video: "videoMessage",
        };

        const isMatch =
          (command.on &&
            messageType[command.on] &&
            message.msg &&
            message.msg[messageType[command.on]] !== null) ||
          !command.pattern ||
          command.pattern.test(message.text) ||
          (command.on === "text" && message.text) ||
          (command.on && !messageType[command.on] && !message.msg[command.on]);

        if (isMatch) {
          if (command.fromMe && !message.isSudo) return;
          if (command.onlyPm && message.isGroup) return;
          if (command.onlyGroup && !message.isGroup) return;
          if (command.pattern && config.READ_CMD == true)
            await client.readMessages([message.data.key]);
          const match = message.text?.match(command.pattern) || "";

          try {
            await command.function(
              message,
              match.length === 6 ? match[3] ?? match[4] : match[2] ?? match[3],
              client,
            );
          } catch (e) {
            if (config.ERROR_MSG) {
              console.log(e);
              const sudo =
                numToJid(config.SUDO.split(",")[0]) || client.user.id;
              await client.sendMessage(
                sudo,
                {
                  text:
                    "```─━❲ ERROR REPORT ❳━─\n\nMessage : " +
                    message.text +
                    "\nError : " +
                    e.message +
                    "\nJid : " +
                    message.jid +
                    "```",
                },
                { quoted: message.data }
              );
            }
          }
        }
      });
    });
  } catch (error) {
    console.error("Error connecting to WhatsApp:", error);
    process.exit(1); // Exit with error status
  }
}

// Call the initialization function
initialize();
