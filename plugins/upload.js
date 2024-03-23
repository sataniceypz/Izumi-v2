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
match = match || m.quoted.text;
if (!match)return message.reply(`*_Need a imgur/graph Link_*`)
return await message.sendFromUrl(match, { caption: (X.CAPTION) }, {quoted: message})
});

// Zeta-XD
