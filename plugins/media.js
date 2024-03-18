const {
  Function,
  command,
  qrcode,
  webp2mp4,
  isUrl,
  isPrivate,
  getJson,
  getUrl,
  isIgUrl,
  findMusic,
} = require("../lib/");
const { yta, ytIdRegex, ytv } = require("../lib/yotube");
const { search } = require("yt-search");
let gis = require("g-i-s");
const { AddMp3Meta } = require("../lib");
const googleTTS = require('google-tts-api')
const jimp = require("jimp");
const QRReader = require("qrcode-reader");
const { RMBG_KEY } = require("../config");
let { unlink } = require("fs/promises");
const got = require("got");
const FormData = require("form-data");
const stream = require("stream");
const { promisify } = require("util");
const pipeline = promisify(stream.pipeline);
const fs = require("fs");
const fetch = require("node-fetch");
const config = require("../config");
const { CAPTION } = require("../config");
/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/



Function(
  {
    pattern: "img",
    fromMe: isPrivate,
    desc: "Google Image search",
    type: "downloader",
  },
  async (message, match) => {
    if (!match) return await message.sendMessage("*_Enter Search Term,number_*");
    let [query, amount] = match.split(",");
    let result = await gimage(query, amount);
    await message.sendMessage(
      `*_Downloading ${amount || 5} images for ${query}_*`
    );
    for (let i of result) {
      await message.sendFromUrl(i);
    }
  }
);

async function gimage(query, amount = 5) {
  let list = [];
  return new Promise((resolve, reject) => {
    gis(query, async (error, result) => {
      for (
        var i = 0;
        i < (result.length < amount ? result.length : amount);
        i++
      ) {
        list.push(result[i].url);
        resolve(list);
      }
    });
  });
}


command(
  {
    pattern: "tts",
    fromMe: isPrivate,
    desc: "google tts by aswin sparky",
    type: "converter",
  },
  async (message, match, m) => {
if (!match) return await message.reply(`*_Need Text!_*
*_Example: tts Hello_*
*_tts Hello :en_*`);
            let [txt,lang] = match.split`:`
            const audio = googleTTS.getAudioUrl(`${txt}`, {
                lang: lang || "en-US",
                slow: false,
                host: "https://translate.google.com",
            })
            message.client.sendMessage(message.jid, {
                audio: {
                    url: audio,
                },
                mimetype: 'audio/mpeg',
                ptt: true,
            }, {
                quoted: message,
            })
  }
  );

command(
  {
    pattern: "caption",
    fromMe: isPrivate,
    desc: "change video and image caption",
    type: "converter",
  },
  async (message, match, m) => {
if (!message.reply_message || (!message.reply_message.video && !message.reply_message.image)) return await message.reply('*_Reply at image/video!_*')
let res = await m.quoted.download();
      if(message.reply_message.video){
       await message.client.sendMessage(message.jid, { video :res ,  mimetype:"video/mp4", caption: (match)}, {quoted: message })
      } else if(message.reply_message.image){
      await message.client.sendMessage(message.jid, { image :res ,  mimetype:"image/jpeg", caption: (match)}, {quoted: message })
}
  }
  );



/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "photo",
    fromMe: isPrivate,
    desc: "Changes sticker to Photo",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message)
      return await message.reply("*_Reply to a sticker_*");
    if (message.reply_message.mtype !== "stickerMessage")
      return await message.reply("*_Not a sticker_*");
    let buff = await m.quoted.download();
    return await message.sendMessage(buff,{mimetype: 'image/jpeg', caption: (config.CAPTION), quoted: message }, "image")
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "mp4",
    fromMe: isPrivate,
    desc: "Changes sticker to Video",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message)
      return await message.reply("*_Reply to a sticker_*");
    if (message.reply_message.mtype !== "stickerMessage")
      return await message.reply("*_Not a sticker_*");
    let buff = await m.quoted.download();
    let buffer = await webp2mp4(buff);
    return await message.sendMessage(buffer,{mimetype: 'video/mp4', caption: (config.CAPTION), quoted: message }, "video")
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

const { toAudio } = require("../lib/media");
command(
  {
    pattern: "mp3",
    fromMe: isPrivate,
    desc: "converts video/audio/voice to mp3",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message || (!message.reply_message.video && !message.reply_message.audio)) return await message.reply('*_Reply at audio/voice/video!_*')  
    let buff = await m.quoted.download();
    buff = await toAudio(buff, "mp3");
     await message.sendMessage(buff,{mimetype: 'audio/mpeg', quoted: message }, "audio");
  }
);

command(
  {
    pattern: "gif",
    fromMe: isPrivate,
    desc: "animated sticker/video to gif",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message)
      return await message.reply("*_Reply to a animated sticker/video_*");
    if (message.reply_message.mtype == "stickerMessage"){
      let buff = await m.quoted.download();
   let buffer = await webp2mp4(buff);
   await message.client.sendMessage(message.jid, { video: { url : buffer }, gifPlayback: true, caption: (config.CAPTION)},{ quoted: message });
   } else if(message.reply_message.video){
    let buff = await m.quoted.download();
   await message.client.sendMessage(message.jid, { video: buff, gifPlayback: true, caption: (config.CAPTION)},{ quoted: message });
  }
  }
);
