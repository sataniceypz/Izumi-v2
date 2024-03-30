const { command } = require("../lib");
const fetch = require("node-fetch");
const config = require("../config");
command(
    {
        pattern: "xvd",
        fromMe: true,
        desc: "xv Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need a xv Link_*");
var sex = await fetch(`https://raganork-network.vercel.app/api/xvideos/download?url=${match}`);
        var fek = await sex.json();

        await message.client.sendMessage(message.jid,{video:{ url: fek.url}, caption : (config.CAPTION)}, {quoted : message})
    }
    );
