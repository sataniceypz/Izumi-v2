const { command } = require("../lib/");

command(
    {
        pattern: "mee",
        fromMe: true,
        desc: "self mention",
        type: "user",
    },
    async (message, match, m) => {
await message.sendMessage('@' + client.user.id.split(":")[0], { contextInfo: { mentionedJid: [m.sender] } });
});
