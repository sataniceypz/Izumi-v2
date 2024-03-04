const { command, isPrivate, runtime } = require("../lib");

command({
        pattern: "runtime", 
        fromMe: isPrivate,
        desc: "Bot Runtime", 
        type: "user",
    }, async (msg, match ) => {
let run = runtime(process.uptime())

await msg.reply(`*_Runtime: ${run}_*`)
});
