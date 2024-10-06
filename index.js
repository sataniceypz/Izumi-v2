const {
    makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    Browsers
} = require('@whiskeysockets/baileys');

const fs = require('fs');
const { File } = require('megajs');
const config = process.env;  // Access environment variables in Render
const P = require('pino');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const SESSION_ID = config.SESSION_ID;

// Ensure the auth_info_baileys folder exists
const sessionPath = __dirname + '/auth_info_baileys';
if (!fs.existsSync(sessionPath)) {
    fs.mkdirSync(sessionPath, { recursive: true });
}

//=================== SESSION-AUTH with MEGA ============================
const credsPath = `${sessionPath}/creds.json`;

if (!fs.existsSync(credsPath)) {
    if (!SESSION_ID) return console.log('Please set the SESSION_ID environment variable in Render.');
    const file = File.fromURL(`https://mega.nz/file/${SESSION_ID}`);
    file.download((err, data) => {
        if (err) throw err;
        fs.writeFileSync(credsPath, data, () => {
            console.log("*Session downloaded from MEGA [🌟]*");
        });
    });
}

//==============================================
async function connectToWA() {
    console.log("Connecting...");
    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const { version } = await fetchLatestBaileysVersion();

    const conn = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: false,
        browser: Browsers.macOS("Firefox"),
        syncFullHistory: true,
        auth: state,
        version
    });

    conn.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
                connectToWA();
            }
        } else if (connection === 'open') {
            console.log('*Connected*');
            // Additional setup if needed
        }
    });
    conn.ev.on('creds.update', saveCreds);
}

// Express server setup for health check or other routes
app.get("/", (req, res) => {
    res.send("Bot is running");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Start WhatsApp connection
setTimeout(() => {
    connectToWA();
}, 4000);
