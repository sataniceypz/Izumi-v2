const { IMGBB_KEY } = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const { upload } = require('../lib/imgur');
const { command, isPrivate } = require("../lib");
const fs = require('fs');
const pathh = './fileUrl.mp3';

async function webpUpload(file){
    return new Promise(async (resolve)=>{
    const webpupload = require("imgbb-uploader");
    for (let key of IMGBB_KEY){
    const options = {apiKey: key,imagePath: file};
    var res = await webpupload(options)
    if (res.url) return resolve(res.url);
    }
});
}

command({
    pattern: "url",
    fromMe: isPrivate,
    desc: "url maker",
    type: "misc",
  },
  async (message, match, m) => {

if (message.reply_message.sticker){
    return await message.client.sendMessage(message.jid,{text:"_"+(await webpUpload(await m.quoted.download()))+"_"},{ quoted:message })
}
else if (message.reply_message.audio){
    if (message.reply_message.duration > 90) return await message.client.sendMessage(message.jid,{text:'*_Audio too large. Try below 90 seconds!_*'},{ quoted:message });
    fs.writeFileSync(pathh, await m.quoted.download());
    await message.reply("*_Uploading Url…_*")
    ffmpeg(pathh).outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"]).save('output.mp4').on('end', async () => {
    try { var res = await upload('output.mp4'); } catch {return await message.client.sendMessage(message.jid,{text:"*_Failed to upload file!_*"},{ quoted:message });}
    return await message.client.sendMessage(message.jid,{text:"_"+res.link+"_"},{ quoted:message });
});
}
else if (message.reply_message.image){
    const imgp = './dldImg.jpg';
    fs.writeFileSync(imgp,await m.quoted.download());
    let {link} = await upload(imgp)
if (typeof link == 'function'){
    return await message.reply("*_There are issues with Bot's IP & imgur, so uploading can't be done_*")
}
try { await message.client.sendMessage(message.jid,{text:"_"+link+"_"},{ quoted:message }) } catch {return await message.client.sendMessage(message.jid,{text:"*_Failed to upload file!_*"},{ quoted:message });}
} else if(message.reply_message.video){
const imgp = './dldVideo.mp4';
    fs.writeFileSync(imgp,await m.quoted.download());
    let {link} = await upload(imgp)
if (typeof link == 'function'){
    return await message.reply("*_There are issues with Bot's IP & imgur, so uploading can't be done_*")
}
try { await message.client.sendMessage(message.jid,{text:"_"+link+"_"},{ quoted:message }) } catch {return await message.client.sendMessage(message.jid,{text:"*_Failed to upload file!_*"},{ quoted:message });}
}
else return await message.reply("*_Reply to image/video/audio_*");
});
