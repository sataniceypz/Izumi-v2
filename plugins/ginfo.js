const { command, isPrivate } = require("../lib/");

command(
    {
        pattern: "ginfo",
        fromMe: isPrivate,
        desc: "group infp",
        type: "group",
    },
    async (message, match, client, m) => {
        if (!match || !match.match(/^https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]/)) return await message.reply("*_Need A WhatsApp Group Link_*");
let urlArray = (match).trim().split("/")[3];
	const metadata = await message.client.groupGetInviteInfo(urlArray)
const sui = "\n*GROUP INFO*\n\n*id* : " + metadata.id + "\n*title* : " + metadata.subject + "\n*description* : " + metadata.desc + "\n*size* : " + metadata.size + "\n*creator* : " + (metadata.owner ? metadata.owner.split('@')[0] : 'unknown') + "\n*restrict* : " + metadata.restrict + "\n*announce* : " + metadata.announce + "\n*created on* : " + require('moment-timezone')(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') + "\n\n𝐈𝐙𝐔𝐌𝐈-𝐗𝐃";
return await message.client.sendMessage(message.jid,{ document :{ url: "https://www.mediafire.com/file/n1qjfxjgvt0ovm2/IMG-20240211-WA0086_%25281%2529.pdf/file" }, fileName: "𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢" , mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileLength: "999999950", caption: (sui)}, {quoted: message })
    }
    );
