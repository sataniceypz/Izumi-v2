const { command , isPrivate , getBuffer, getJson } = require("../lib");
const fetch = require("node-fetch");
const { CAPTION } = require("../config");
const axios = require("axios");
const config = require("../config");

command(
    {
        pattern: "song",
        fromMe: isPrivate,
        desc: "Song Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need Song Name Or Url_*");
var res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${match}`)
var song = res.data
await message.client.sendMessage(message.jid, { text: `*_Downloading ${song.data.title}_*` },{ quoted: message})
const aswinsparky = await (await fetch(`${song.data.downloadUrl}`)).buffer()
await message.client.sendMessage(message.jid, { audio :aswinsparky,  mimetype:"audio/mpeg", contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "𝙎𝙤𝙣𝙜 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }} }, {quoted: message })
    }
    );

// ZETA BRO //


command(
    {
        pattern: "insta",
        fromMe: isPrivate,
        desc: "Instagram Video/Photo Downloader",
        type: "downloader",
    },
    async (message, match) => {
    	match = match || message.reply_message.text
   if (!match)return message.reply(`*_Need instagram Link_*`)
      var h = await getJson(`https://api.lokiser.xyz/api/loki/insta?url=${match}`);
    for (const item of h.result) {
            await message.sendFromUrl(item.download_link, { caption: (config.CAPTION)})
        }
             
});


// ZETA BRO //
command(
    {
        pattern: "ytv",
        fromMe: isPrivate,
        desc: "Video Downloader 720p",
        type: "downloader",
    },
    async (message, match) => {
        if (!match.includes("https://youtu")) return await message.sendMessage("*_Need a YouTube url_*");
var ytmp4 = await
                    fetch(`https://vihangayt.me/download/ytmp4?url=${match}`)
        var yt = await ytmp4.json()
        await message.client.sendMessage(message.jid, { text: `*Downloading ${yt.data.title}*` },{ quoted: message})
                    await message.client.sendMessage(message.jid,{video:{ url: yt.data.vid_720p}, contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "𝙑𝙞𝙙𝙚𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption : `_*${yt.data.title}*_`}, {quoted : message})
    }
    );

command(
    {
        pattern: "video",
        fromMe: isPrivate,
        desc: "Yt Video Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need a Video Name_*");
let {result} = await getJson(`https://api-aswin-sparky.koyeb.app/api/downloader/yt_video?search=${match}`);
await message.client.sendMessage(message.jid, { text: `*_Downloading ${result.title}_*` },{ quoted: message})
return await message.sendFromUrl(result.url, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "𝙑𝙞𝙙𝙚𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: `*${result.title}*`}, {quoted: message })
    });
// Zeta-XD 

/* command(
    {
        pattern: "spotify",
        fromMe: isPrivate,
        desc: "Spotify Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need a spotify  url_*");
var sex = await fetch(`https://vihangayt.me/download/spotify?url=${match}`);
        var fek = await sex.json();
        message.reply(`                       *DOWNLOADED*\n\n> *SONG* : ${fek.data.song} \n> *ARTIST* : ${fek.data.artist} \n> *RELEASED* : ${fek.data.release_date}\n\n𝐄𝐙𝐑𝐀 𝐗𝐃`)
        await message.client.sendMessage(message.jid, { audio :{ url: fek.data.url } , mimetype : 'audio/mpeg', contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: `🎧 ${fek.data.song}`,
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, }, {quoted: message })
    }
    );

// Zeta Kunda // */

command(
    {
        pattern: "story",
        fromMe: isPrivate,
        desc: "Instagram story Downloader",
        type: "downloader",
    },
    async (message, match) => {
    	match = match || message.reply_message.text
   if (!match)return message.reply(`*_Need story instagram Link_*`)
      var h = await getJson(`https://api.lokiser.xyz/api/loki/insta?url=${match}`);
    for (const item of h.result) {
            await message.sendFromUrl(item.download_link, { caption: (config.CAPTION)})
        }
             
});



// Andi ///


command(
    {
        pattern: "pinterest",
        fromMe: isPrivate,
        desc: "pinterest Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need Pinterest Url_*");
var {result} = await getJson(`https://api.lokiser.xyz/api/pinterestdl?link=${match}`)
await message.sendFromUrl(result.LokiXer.url,{ contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: ``,
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (config.CAPTION)}, {quoted: message})
    }
    );
