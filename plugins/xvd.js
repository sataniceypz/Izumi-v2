const { command, isPrivate } = require("../lib");
const fetch = require("node-fetch");
const config = require("../config");
command(
    {
        pattern: "xvd",
        fromMe: isPrivate,
        desc: "xv Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need a xv Link_*");
var sex = await fetch(`https://raganork-network.vercel.app/api/xvideos/download?url=${match}`);
        var fek = await sex.json();

        await message.client.sendMessage(message.jid,{video:{ url: fek.url}, contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "𝙑𝙞𝙙𝙚𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption : (config.CAPTION)}, {quoted : message})
    }
    );
