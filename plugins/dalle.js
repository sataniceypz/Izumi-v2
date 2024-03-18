const { command, isPrivate } = require("../lib/");

command(
    {
        pattern: "dalle",
        fromMe: isPrivate,
        desc: "ai image generator",
        type: "downloader",
    },
    async (message, match, m) => {
match = match || message.reply_message.text;
	if(!match) return await message.reply(`*_Need A Text_*\n*eg:- .dalle a modified gtr in garage*`);
await message.sendFromUrl(`https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${match}`, {caption: "*zetahh👀*"})
});
