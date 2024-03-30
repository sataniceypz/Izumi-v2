/*const { command, isPrivate, getJson } = require("../lib/");

command(
    {
        pattern: "fb",
        fromMe: isPrivate,
        desc: "Facebook Downloader",
        type: "downloader",
    },
    async (message, match, client) => {
        if (!match) return await message.sendMessage("*_Need Facebook Link_*");
let {data} = await getJson(`https://api.vihangayt.asia/downloader/fb?url=${match}`)
await message.client.sendMessage(message.jid, { text: `\n╔┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⚆
║ 𝐓𝐢𝐭𝐥𝐞 : ${data.title}
║ 𝐃𝐞𝐬𝐜 : ${data.description}
║ 𝐔𝐫𝐥 : ${match}
║
║ 1.⬢ *Sd quality*
║ 2.⬢ *Hd quality*
║
║ 𝗦𝗲𝗻𝗱 𝗮 𝗻𝘂𝗺𝗯𝗲𝗿 𝗮𝘀 𝗮 𝗿𝗲𝗽𝗹𝘆 𝘁𝗼 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱
╚┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⚆\n`, contextInfo: { externalAdReply: {
     title: "𝐳𝐞𝐭𝐚𝐚𝐚𝐡𝐡 ࿊",
     body: "",
     sourceUrl: "",
     mediaUrl: "",
     mediaType: 1,
     showAdAttribution: true,
     renderLargerThumbnail: true,
     thumbnailUrl: "https://i.imgur.com/dnmFvwx.jpeg" }},},{ quoted: message });
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
let final = message.reply_message.text.split("║ ")[3] 
final = final.replace("𝐔𝐫𝐥 :", "")
let title = final;
let {data} = await getJson(`https://api.vihangayt.asia/downloader/fb?url=${title}`)
await message.sendFromUrl(data.sdLink, {caption: "𝐳𝐞𝐭𝐚𝐚𝐚𝐡𝐡 ࿊"}, {quoted:message})

}catch(error){
return error
}
} else if(match.toLowerCase() == "2" && message.reply_message.text.includes("𝐓𝐢𝐭𝐥𝐞 :") === true){

try{
let final = message.reply_message.text.split("║ ")[3] 
final = final.replace("𝐔𝐫𝐥 :", "")
let title = final;
let {data} = await getJson(`https://api.vihangayt.asia/downloader/fb?url=${title}`)
await message.sendFromUrl(data.hdLink, {caption: "𝐳𝐞𝐭𝐚𝐚𝐚𝐡𝐡 ࿊"}, {quoted:message})

}catch(error){
return error
}
}
});
*/
