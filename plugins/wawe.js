const { command, isPrivate } = require("../lib/");
const { toPTT } = require("../lib/media");
command(
  {
    pattern: "wawe",
    fromMe: isPrivate,
    desc: "converts video/audio/voice to voice",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message || (!message.reply_message.video && !message.reply_message.audio)) return await message.reply('*_Reply at audio/voice/video!_*')  
    let buff = await m.quoted.download();
        let media = await toPTT(buff);

        return await message.sendMessage(media, { mimetype: 'audio/mpeg', ptt: true, contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "𝘾𝙤𝙣𝙫𝙚𝙧𝙩𝙚𝙙 𝙏𝙤 𝙑𝙤𝙞𝙘𝙚",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, quoted: message }, "audio");
  }
);
