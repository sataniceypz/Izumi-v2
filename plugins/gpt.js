const { command, isPrivate, getJson } = require("../lib/");
command(
    {
        pattern: "gpt",
        fromMe: isPrivate,
        desc: "chat gpt",
        type: "user",
    },
    async (message, match) => {
        if (!match) return await message.reply(`*_Need Text_*\n*Eg:- .gpt Hi*`);
let {result} = await getJson(`https://itzpire.site/ai/contract-gpt?q=${match}`);
await message.client.sendMessage(message.jid, { text: result })
});
//sataniceypz
