const { 
    makeWASocket, 
    useMultiFileAuthState, 
    DisconnectReason, 
    jidNormalizedUser, 
    getContentType, 
    fetchLatestBaileysVersion, 
    Browsers 
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const P = require('pino');
const config = require('./config');
const qrcode = require('qrcode-terminal');
const { File } = require('megajs');  // MEGA.js for downloading files

//===================SESSION-AUTH============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    // If SESSION_ID is not provided, stop the script
    if(!config.SESSION_ID) return console.log('Please add your session to SESSION_ID in config !!');
    
    // Using MEGA to download the session file if it doesn't exist
    const sessdata = config.SESSION_ID;  // Your MEGA file session link (e.g., file ID)
    const file = File.fromURL(`https://mega.nz/file/${sessdata}`);
    
    // Download session file from MEGA
    file.download((err, data) => {
        if (err) throw err;
        
        // Write the downloaded session data to creds.json
        fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', data, () => {
            console.log("*Session downloaded from MEGA [🌟]*");
        });
    });
}

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

//=========================== MAIN FUNCTION ================================

async function connectToWA() {
    console.log("Connecting to WhatsApp...");

    // Authentication with multi-file auth state
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/');
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: true,  // Set to false if not needed
        browser: Browsers.macOS("Safari"),
        auth: state,
        version
    });

    // Listen for connection updates
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason === DisconnectReason.loggedOut) {
                console.log('Logged out, terminating session.');
            } else {
                console.log('Reconnecting...');
                connectToWA();  // Try to reconnect
            }
        } else if (connection === 'open') {
            console.log('WhatsApp connection established');
        }
    });

    // Handle authentication state update
    sock.ev.on('creds.update', saveCreds);

    // Add your other message handling code here...
    sock.ev.on('messages.upsert', async (m) => {
        // Your logic here...
    });

    return sock;
}

// Initialize connection
connectToWA().catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
