/*const { command, isPrivate, getJson } = require("../lib/");
command(
    {
        pattern: "gpt",
        fromMe: isPrivate,
        desc: "chat gpt",
        type: "user",
    },
    async (message, match) => {
        if (!match) return await message.reply(`*_Need Text_*\n*Eg:- .gpt Hi*`);
let {data} = await getJson(`https://api.vihangayt.asia/ai/chatgpt?q=${match}`);
await message.sendMessage(message.jid, { text: data })
});*/
