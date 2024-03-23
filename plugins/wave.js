const { command, isPrivate } = require("../lib/");
const { toPTT } = require("../lib/media");
command(
  {
    pattern: "wave",
    fromMe: isPrivate,
    desc: "converts video/audio/voice to voice",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message || (!message.reply_message.video && !message.reply_message.audio)) return await message.reply('*_Reply at audio/voice/video!_*')  
    let buff = await m.quoted.download();
        let media = await toPTT(buff);

        return await message.sendMessage(media, { mimetype: 'audio/mpeg', ptt: true, quoted: message }, "audio");
  }
);
