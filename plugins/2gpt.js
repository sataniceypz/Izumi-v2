const { command, isPrivate, getJson } = require("../lib/");
command(
    {
        pattern: "2gpt",
        fromMe: isPrivate,
        desc: "chat gpt",
        type: "user",
    },
    async (message, match) => {
        if (!match) return await message.reply(`*_Need Text_*\n*Eg:- .gpt Hi*`);
let kko = await message.sendFromUrl("https://i.imgur.com/dHVUYg6.jpeg",
      {caption: "*Thinking....👀*"}, {quoted: message})
      let {result} = await getJson(`https://guruapi.tech/api/chatgpt?text=${match}`);
await message.client.relayMessage(message.jid, {
        protocolMessage: {
          key: kko.key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
});
