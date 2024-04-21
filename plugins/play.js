const { command, isPrivate } = require("../lib/");
const fetch = require("node-fetch");
const yts = require("yt-search");
const ytdl = require("ytdl-core")
const { CAPTION } = require("../config");
const X = require("../config");

command(
    {
        pattern: "play",
        fromMe: isPrivate,
        desc: "YouTube Search",
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
let Ytd = await ytmp3(title);
await message.client.sendMessage(message.jid, {audio: Ytd.buffer, mimetype: "audio/mpeg"}, { quoted: message }, "audio");

async function ytmp3(url) {
    try {
        const {
            videoDetails
        } = await ytdl.getInfo(url, {
            lang: "id"
        });

        const stream = ytdl(url, {
            filter: "audioonly",
            quality: "highestaudio"
        });
        const chunks = [];

        stream.on("data", (chunk) => {
            chunks.push(chunk);
        });

        await new Promise((resolve, reject) => {
            stream.on("end", resolve);
            stream.on("error", reject);
        });

        const buffer = Buffer.concat(chunks);

        return {
            meta: {
                title: videoDetails.title,
                channel: videoDetails.author.name,
                seconds: videoDetails.lengthSeconds,
                description: videoDetails.description,
                image: videoDetails.thumbnails.slice(-1)[0].url,
            },
            buffer: buffer,
            size: buffer.length,
        };
    } catch (error) {
        throw error;
    }
};
}catch(error){
return error
}
} else if(match.toLowerCase() == "2" && message.reply_message.text.includes("𝐓𝐢𝐭𝐥𝐞 :") === true){

try{
let final = message.reply_message.text.split("║ ")[4] 
final = final.replace("𝐔𝐫𝐥 :", "")
let title = final;
let Ytd = await ytmp4(title, "134");
await message.client.sendMessage(message.jid, {video: {url: Ytd.videoUrl}, mimetype: "video/mp4", caption: (X.CAPTION)}, { quoted: message }, "video");

function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedDuration = [];

    if (hours > 0) {
        formattedDuration.push(`${hours} hour`);
    }

    if (minutes > 0) {
        formattedDuration.push(`${minutes} minute`);
    }

    if (remainingSeconds > 0) {
        formattedDuration.push(`${remainingSeconds} second`);
    }

    return formattedDuration.join(' ');
}

function formatBytes(bytes) {
    if (bytes === 0) {
        return '0 B';
    }
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function ytmp4(query, quality = 134) {
    try {
        const videoInfo = await ytdl.getInfo(query, {
            lang: 'id'
        });
        const format = ytdl.chooseFormat(videoInfo.formats, {
            format: quality,
            filter: 'videoandaudio'
        })
        let response = await fetch(format.url, {
            method: 'HEAD'
        });
        let contentLength = response.headers.get('content-length');
        let fileSizeInBytes = parseInt(contentLength);
        return {
            title: videoInfo.videoDetails.title,
            thumb: videoInfo.videoDetails.thumbnails.slice(-1)[0],
            date: videoInfo.videoDetails.publishDate,
            duration: formatDuration(videoInfo.videoDetails.lengthSeconds),
            channel: videoInfo.videoDetails.ownerChannelName,
            quality: format.qualityLabel,
            contentLength: formatBytes(fileSizeInBytes),
            description: videoInfo.videoDetails.description,
            videoUrl: format.url
        }
    } catch (error) {
        throw error
    }
}
}catch(error){
return error
}
}
})
