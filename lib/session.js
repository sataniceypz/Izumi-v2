const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

async function MakeSession(sessionId, folderPath, mongoDb) {
    try {
        // Create folder if it doesn't exist
        await fs.mkdir(folderPath, { recursive: true });

        // Send request to restore session
        const response = await axios.post('https://api.lokiser.xyz/mongoose/session/restore', {
            id: sessionId,
            mongoUrl: mongoDb
        });

        // Extract data from response
        const jsonData = response.data.data;

        // Write data to creds.json
        const filePath = path.join(folderPath, "creds.json");
        await fs.writeFile(filePath, jsonData);

        console.log("creds.json created successfully.");
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

module.exports = { MakeSession };
