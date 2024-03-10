/*const { command, isPrivate } = require("../lib/");
const fetch = require("node-fetch")
command(
    {
        pattern: "yta",
        fromMe: isPrivate,
        desc: "YouTube song Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match.includes("https://youtu")) return await message.sendMessage("*_Need a YouTube url_*");
var ytmp4 = await
                    fetch(`https://vihangayt.me/download/ytmp4?url=${match}`)
        var yt = await ytmp4.json()
        await message.client.sendMessage(message.jid, { text: `*Downloading ${yt.data.title}*` },{ quoted: message})
                    await message.client.sendMessage(message.jid, { audio :{url: yt.data.vid_720p },  mimetype:"audio/mpeg", contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "𝙎𝙤𝙣𝙜 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: `${yt.data.thumbnail}` }}, }, {quoted: message })
    }
    );
