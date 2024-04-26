const config = require("../config");
const { command, isPrivate, getJson, sleep, tiny, AddMp3Meta, getBuffer, toAudio, styletext, listall } = require("../lib/");
const { Image } = require("node-webpmux");
/* Copyright (C) 2024 Louis-X0.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-X0
*/

/*command(
    {
        pattern: "attp",
        fromMe: isPrivate,
        desc: "text to animation sticker",
        type: "converter",
    },
    async (message, match) => {
    	
    	
   if (!match)return message.reply(`*_Need a text_*`)
let buff = await getBuffer(`https://vihangayt.me/maker/text2gif?q=${match}`);
    await message.sendMessage(
      buff,
      { packname: config.STICKER_DATA.split(";")[0], author: config.STICKER_DATA.split(";")[1] },
      "sticker"
    );
});
*/


/* Copyright (C) 2024 Louis-X0.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-XD
*/


command(
  {
    pattern: "fancy",
    fromMe: isPrivate,
    desc: "converts text to fancy text",
    type: "converter",
  },
  async (message, match) => {
    if (!message.reply_message || !message.reply_message.text || !match ||isNaN(match)) {
      let text = tiny(
        "\n𝗙𝗔𝗡𝗖𝗬 𝗧𝗘𝗫𝗧 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥\n\nReply to a message\nExample: .fancy 32\n\n"
      );
      listall("Eypz").forEach((txt, num) => {
        text += `${(num += 1)} ${txt}\n`;
      });
        text += "\n\n𝐄𝐘𝐏𝐙"
      return await message.client.sendMessage(message.jid,{ document :{ url: "https://www.mediafire.com/file/n1qjfxjgvt0ovm2/IMG-20240211-WA0086_%25281%2529.pdf/file" }, fileName: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗 𝗙𝗔𝗡𝗖𝗬 𝗠𝗘𝗡𝗨" , mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileLength: "999999950", caption: (text)}, {quoted: message });
    } else {
      message.reply(styletext(message.reply_message.text, parseInt(match)));
    }
  }
);


/* Copyright (C) 2024 Louis-XD.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-XD - Zeta-XD
*/

command(
  {
    pattern: "sticker",
    fromMe: isPrivate,
    desc: "Converts Photo or video to sticker",
    type: "converter",
  },
  async (message, match, m) => {
    if (!(message.reply_message.video || message.reply_message.image))
      return await message.reply("*_Reply to photo or video!_*");
    let buff = await m.quoted.download();
    message.sendMessage(
      buff,
      { packname: config.STICKER_DATA.split(";")[0], author: config.STICKER_DATA.split(";")[1] },
      "sticker"
    );
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "tgs",
    fromMe: isPrivate,
    desc: "Download Sticker From Telegram",
    type: "download",
  },
  async (message, match) => {
    if (!match)
      return message.reply(
        "*_Enter a tg sticker url_*\n*_Eg: https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently_*"
      );
    let packid = match.split("/addstickers/")[1];
    let { result } = await getJson(
      `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
        packid
      )}`
    );
    if (result.is_animated)
      return message.reply("*_Animated stickers are not supported_*");
    message.reply(
      `*_Total stickers :_* ${result.stickers.length}\n*_Estimated complete in:_* ${
        result.stickers.length * 1.5
      } seconds`.trim()
    );
    for (let sticker of result.stickers) {
      let file_path = await getJson(
        `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${sticker.file_id}`
      );
      await message.sendMessage(
        `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`,
        { packname: config.STICKER_DATA.split(";")[0], author: config.STICKER_DATA.split(";")[1] },
        "sticker"
      );
      sleep(1500);
    }
  }
);

command(
  {
    pattern: "take",
    fromMe: isPrivate,
    desc: "change audio title,album/sticker author,packname",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message || (!message.reply_message.video && !message.reply_message.audio && !message.reply_message.sticker)) return await message.reply('*_Reply at sticker/audio/voice/video!_*')  
    if(message.reply_message.audio || message.reply_message.video) {
    let buff = await toAudio(await m.quoted.download());
    let logo = match && match.split(/[,;]/)[2] ? match.split(/[,;]/)[2] : config.AUDIO_DATA.split(/[;]/)[2];
    let imgbuff = await getBuffer(logo.trim());
    let NaMe = match ? match.split(/[|,;]/) ? match.split(/[|,;]/)[0] : match : config.AUDIO_DATA.split(/[|,;]/)[0] ? config.AUDIO_DATA.split(/[|,;]/)[0] : config.AUDIO_DATA;
    const aud = await AddMp3Meta(buff, imgbuff, {title: NaMe, artist: "hi"});
    return await message.client.sendMessage(message.jid, {
        audio: aud,
        mimetype: 'audio/mpeg',
    }, { quoted: message });
    } else if(message.reply_message.sticker){
    let buff = await m.quoted.download();
    let [packname, author] = match.split(";");
    await message.sendMessage(
      buff,
      {
        packname: packname || config.STICKER_DATA.split(";")[0],
        author: author || config.STICKER_DATA.split(";")[1]
      },
      "sticker"
    );
    }
});

command(
  {
    pattern: "exif",
    fromMe: true,
    desc: "description",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message || !message.reply_message.sticker)
      return await message.reply("*_Reply to sticker_*");
    let img = new Image();
    await img.load(await m.quoted.download());
    const exif = JSON.parse(img.exif.slice(22).toString());
    await message.reply(exif);
  }
);
