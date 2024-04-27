const { command, isPrivate } = require("../lib/");
const { upload } = require('../lib/imgur');
const fs = require('fs');

command(
    {
        pattern: "remini",
        fromMe: isPrivate,
        desc: "photo enhancer",
        type: "converter",
    },
    async (message, match, m) => {
if (!message.reply_message)
return await message.reply("*_reply to any image!_*");
const imgp = './dldImg.jpg';
fs.writeFileSync(imgp,await m.quoted.download());
let {link} = await upload(imgp)
let img = `https://api.maher-zubair.tech/maker/enhance?url=${link}`;
return await message.sendFromUrl(img, {caption: "*Izumi🧚‍♂️*"})
});
