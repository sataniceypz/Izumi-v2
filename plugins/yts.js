const { command, isPrivate } = require("../lib/");
const yts = require("yt-search");

command(
    {
        pattern: "yts",
        fromMe: isPrivate,
        desc: "YouTube searcher",
        type: "search",
    },
    async (message, match, client) => {
        if (!match) return await message.sendMessage("*_Need Query_*");
let title = await yts(`${match}`)
await message.client.sendMessage(message.jid, { text: `\n╔┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⚆
║ 𝐓𝐢𝐭𝐥𝐞 : ${title.all[0].title}
║ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧 : ${title.all[0].seconds}
║ 𝐕𝐢𝐞𝐰𝐬 : ${title.all[0].views}
║ 𝐔𝐫𝐥 : ${title.all[0].url}
║
║ 1.⬢ *audio*
║ 2.⬢ *video*
║
║ 𝗦𝗲𝗻𝗱 𝗮 𝗻𝘂𝗺𝗯𝗲𝗿 𝗮𝘀 𝗮 𝗿𝗲𝗽𝗹𝘆 𝘁𝗼 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱
╚┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⚆\n`, contextInfo: { externalAdReply: {
     title: "𝐳𝐞𝐭𝐚𝐚𝐚𝐡𝐡 ࿊",
     body: `${title.all[0].ago}`,
     sourceUrl: "",
     mediaUrl: "",
     mediaType: 1,
     showAdAttribution: true,
     renderLargerThumbnail: true,
     thumbnailUrl: `${title.all[0].image}` }},},{ quoted: message });
    }
    );


command({
 on: "text",
 fromMe: false,
 dontAddCommandList: true,

},
async(message, match, client, m)=> {
if(match.toLowerCase() == "1" && message.reply_message.text.includes("𝐓𝐢𝐭𝐥𝐞 :") === true){

try{
let final = message.reply_message.text.split("║ ")[4] 
final = final.replace("𝐔𝐫𝐥 :", "")
let title = final;
let dat = `https://api.lokiser.xyz/youtube/yta?url=${title}`
await message.client.sendMessage(message.jid, { audio :{ url: dat },  mimetype:"audio/mpeg" }, {quoted: message })

}catch(error){
return error
}
} else if(match.toLowerCase() == "2" && message.reply_message.text.includes("𝐓𝐢𝐭𝐥𝐞 :") === true){

try{
let final = message.reply_message.text.split("║ ")[4] 
final = final.replace("𝐔𝐫𝐥 :", "")
let title = final;
let dat = `https://api.lokiser.xyz/youtube/ytv?url=${title}`
await message.sendFromUrl(dat, {caption :"𝐳𝐞𝐭𝐚𝐚𝐚𝐡𝐡 ࿊" }, {quoted: message })

}catch(error){
return error
}
}
})
