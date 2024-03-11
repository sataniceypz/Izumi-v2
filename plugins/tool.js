const { command, qrcode, isUrl, isPrivate, findMusic } = require("../lib/");
const jimp = require("jimp");
const QRReader = require("qrcode-reader");
let { unlink } = require("fs/promises");
const got = require("got");
const FormData = require("form-data");
const stream = require("stream");
const { promisify } = require("util");
const pipeline = promisify(stream.pipeline);
const fs = require("fs");
const { downloadMediaMessage } = require('@whiskeysockets/baileys');

command(
  {
    pattern: "qr",
    fromMe: isPrivate,
    desc: "Read/Write Qr.",
    type: "converter",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (match) {
      let buff = await qrcode(match);
      return await message.sendMessage(buff, {}, "image");
    } else if (!message.reply_message || !message.reply_message.image)
      return await message.sendMessage(
        "*Example : qr test*\n*Reply to a qr image.*"
      );

    const { bitmap } = await jimp.read(
      await message.reply_message.downloadMediaMessage()
    );
    const qr = new QRReader();
    qr.cvideosback = (err, value) =>
      message.sendMessage(err ?? value.result, { quoted: message.data });
    qr.decode(bitmap);
  }
);


command(
    {
        pattern: "find",
        fromMe: isPrivate,
        desc: "Song finder",
        type: "search",
    },
    async (message, match, m, client) => {
        if (!message.reply_message) return await message.reply('*_Reply at audio/video!_*');
let buff = await m.quoted.download();
    let data = await findMusic(buff);
    if (!data.status) return message.reply(data);

    let zeta = `\n*find results*\n
> *Title* : ${data.title}            
> *Artist* : ${data.artists}            
> *Album* : ${data.album}            
> *Genre* : ${data.genres}          
> *Release* : ${data.release_date}
> *YouTube Link* : ${data.youtube}
> *Spotify Link* : ${data.spotify}\n\n𝐄𝐙𝐑𝐀-𝐗𝐃`
                   await message.client.sendMessage(message.jid,{ document :{ url: "https://www.mediafire.com/file/n1qjfxjgvt0ovm2/IMG-20240211-WA0086_%25281%2529.pdf/file" }, fileName: "𝗙𝗜𝗡𝗗 𝗥𝗘𝗦𝗨𝗟𝗧" , mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileLength: "999999950", contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (zeta)}, {quoted: message })
    }
    );

command(
  {
    pattern: "vv",
    fromMe: isPrivate,
    desc: "anti viewOnce",
    type: "user",
  },
  async (message, match, m) => {
if (!message.reply_message || (!m.quoted.message.viewOnceMessageV2 && !m.quoted.message.viewOnceMessageV2Extension)) return await message.reply('*_Reply at viewOnce message!_*')
    if(m.quoted.message.viewOnceMessageV2Extension){
const downloadedMedia1 = await downloadMediaMessage(m.quoted.message.viewOnceMessageV2Extension, 'buffer', {}, { reuploadRequest: message.client.updateMediaMessage })
await message.client.sendMessage(message.jid, { audio :downloadedMedia1 ,  mimetype:"audio/mpeg", ptt: true },{ quoted: message })
} else if(m.quoted.message.viewOnceMessageV2){
const downloadedMedia = await downloadMediaMessage(m.quoted.message.viewOnceMessageV2, 'buffer', {}, { reuploadRequest: message.client.updateMediaMessage })
await message.sendFile(downloadedMedia)
}
  }
);

// Zeta-XD 
