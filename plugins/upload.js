const { command, isPrivate } = require("../lib/");
const { CAPTION } = require("../config");
const X = require("../config");

command(
    {
        pattern: "upload",
        fromMe: isPrivate,
        desc: "Downloads & uploads media from raw URL",
        type: "downloader",
    },
    async (message, match) => {
match = match || message.reply_message.text
if (!match)return message.reply(`*_Need a imgur/graph Link_*`)
return await message.sendFromUrl(match, { contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: ``,
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X.CAPTION)}, {quoted: message})
});

// Zeta-XD
