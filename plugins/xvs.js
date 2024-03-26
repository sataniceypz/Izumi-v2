const { command } = require("../lib");
const fetch = require("node-fetch");
command(
    {
        pattern: "xvs",
        fromMe: true,
        desc: "xv searcher",
        type: "search",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need a Query_*");
var fek = await fetch(`https://raganork-network.vercel.app/api/xvideos/search?query=${match}`)
var data = await fek.json();
        let txt = `\n*XV SEARCH RESULTS*\n\n`;
      
        for (let i=1; i<11; i++){
  txt+=`
> *TITLE* : ${data.result[i].title}
> *DURATION* : ${data.result[i].duration}
> *URL* : ${data.result[i].url}\n`
        }
        txt+=`\n𝐄𝐙𝐑𝐀-𝐗𝐃`
                   await message.client.sendMessage(message.jid,{ document :{ url: "https://www.mediafire.com/file/n1qjfxjgvt0ovm2/IMG-20240211-WA0086_%25281%2529.pdf/file" }, fileName: "𝗫 𝗩𝗜𝗗𝗘𝗢 𝗥𝗘𝗦𝗨𝗟𝗧𝗦" , mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileLength: "999999950", contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (txt)}, {quoted: message })
    }
    );
