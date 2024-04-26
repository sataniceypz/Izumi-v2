const { command, isPrivate, getBuffer } = require("../lib/");
const config = require("../config");

// Eypz 

let title = " 𝗛𝗲𝘆 𝗜𝘇𝘂𝗺𝗶 𝗶𝘀 𝗔𝗹𝗶𝘃𝗲🧚‍♂️"
let body = "𝗜𝗭𝗨𝗠𝗜-𝗫𝗗"
let sourceUrl = "github.com/sataniceypz/Izumi-v2"
let mediaUrl = ""
let mediaType = 1
let showAdAttribution = true
let renderLargerThumbnail = false
let thumbnailUrl = "https://i.imgur.com/J2m8RRH.jpeg"
let seconds = "0xbebc74b"
let ptt = true
let fileLength = "100000000"
let audios = ["https://i.imgur.com/bVO7EQz.mp4","https://i.imgur.com/8vhaz82.mp4","https://i.imgur.com/sDwfg29.mp4","https://i.imgur.com/pbtSy0M.mp4","https://i.imgur.com/dPjoh3s.mp4","https://i.imgur.com/6HXfyVr.mp4"]
let gifPlayback = true


let type = "audio" 

command(
  {
    pattern: "alive ?(.*)",
    fromMe: isPrivate,
    desc: "Izumi here",
    type: "user"
  },
  async (message, match, m, client) => {
  try{
function _0x2f2e(){const _0x407b1a=['audio','shift','593585NqOIfJ','22974786QEqOXg','1118jzvnLj','5864243hwYOMl','8VYQKvk','random','image/jpeg','sticker','194100nOQgEo','5zpjOoA','121846ssBlcd','sendMessage','floor','video/mp4','9OkWUKZ','split','length','2042140qOUcXb','STICKER_DATA','push','206025ChDPEZ','68ItXkLZ','22XFfcfZ','image','9jshMFv','client','18pFpQut','10553550WuvdjN','122846AbSrdx','10666810dADhCw','9439110eCEcHU'];_0x2f2e=function(){return _0x407b1a;};return _0x2f2e();}function _0x22df(_0x193011,_0x5c6d27){const _0x2f2ed3=_0x2f2e();return _0x22df=function(_0x22df49,_0xfa76b1){_0x22df49=_0x22df49-0x99;let _0x836531=_0x2f2ed3[_0x22df49];return _0x836531;},_0x22df(_0x193011,_0x5c6d27);}const _0x33ce70=_0x22df;(function(_0x5b60fe,_0x224e35){const _0x363e1c=_0x22df,_0x6091=_0x5b60fe();while(!![]){try{const _0x1588b3=-parseInt(_0x363e1c(0xaa))/0x1*(-parseInt(_0x363e1c(0x9c))/0x2)+-parseInt(_0x363e1c(0xa6))/0x3*(-parseInt(_0x363e1c(0xa7))/0x4)+-parseInt(_0x363e1c(0xb3))/0x5*(-parseInt(_0x363e1c(0xac))/0x6)+-parseInt(_0x363e1c(0xb6))/0x7*(parseInt(_0x363e1c(0xb7))/0x8)+parseInt(_0x363e1c(0xa0))/0x9*(-parseInt(_0x363e1c(0xb0))/0xa)+-parseInt(_0x363e1c(0xaf))/0xb+-parseInt(_0x363e1c(0x9a))/0xc*(-parseInt(_0x363e1c(0xb5))/0xd);if(_0x1588b3===_0x224e35)break;else _0x6091['push'](_0x6091['shift']());}catch(_0x195527){_0x6091['push'](_0x6091['shift']());}}}(_0x2f2e,0xadbbd));const _0x3241a7=_0x33f4;(function(_0x2f98ef,_0x3ca662){const _0x37ed2c=_0x22df,_0x14e1c1=_0x33f4,_0x7e47a7=_0x2f98ef();while(!![]){try{const _0x22788c=parseInt(_0x14e1c1(0x1a0))/0x1*(parseInt(_0x14e1c1(0x192))/0x2)+parseInt(_0x14e1c1(0x195))/0x3+parseInt(_0x14e1c1(0x19b))/0x4*(parseInt(_0x14e1c1(0x197))/0x5)+-parseInt(_0x14e1c1(0x19c))/0x6+parseInt(_0x14e1c1(0x18d))/0x7+-parseInt(_0x14e1c1(0x193))/0x8+-parseInt(_0x14e1c1(0x19e))/0x9;if(_0x22788c===_0x3ca662)break;else _0x7e47a7[_0x37ed2c(0xa5)](_0x7e47a7[_0x37ed2c(0xb2)]());}catch(_0x500bd6){_0x7e47a7['push'](_0x7e47a7['shift']());}}}(_0x239e,0xe6400));if(type===_0x33ce70(0xb1)){let aud=audios[Math[_0x3241a7(0x191)](Math[_0x3241a7(0x18c)]()*audios[_0x3241a7(0x196)])],buff=await getBuffer(aud);await message[_0x33ce70(0xab)][_0x3241a7(0x1a2)](message[_0x3241a7(0x18f)],{'audio':buff,'mimetype':_0x3241a7(0x199),'ptt':ptt,'seconds':seconds,'fileLength':fileLength,'contextInfo':{'externalAdReply':{'title':title,'body':body,'sourceUrl':sourceUrl,'mediaUrl':mediaUrl,'mediaType':mediaType,'showAdAttribution':showAdAttribution,'renderLargerThumbnail':renderLargerThumbnail,'thumbnailUrl':thumbnailUrl}}});}if(type==='video'){let aud=videos[Math[_0x3241a7(0x191)](Math['random']()*videos[_0x3241a7(0x196)])],buff=await getBuffer(aud);await message[_0x3241a7(0x19d)][_0x33ce70(0x9d)](message[_0x3241a7(0x18f)],{'video':buff,'mimetype':_0x3241a7(0x194),'gifPlayback':gifPlayback,'seconds':seconds,'fileLength':fileLength,'caption':caption,'contextInfo':{'externalAdReply':{'title':title,'body':body,'sourceUrl':sourceUrl,'mediaUrl':mediaUrl,'mediaType':mediaType,'showAdAttribution':showAdAttribution,'renderLargerThumbnail':renderLargerThumbnail,'thumbnailUrl':thumbnailUrl}}});}function _0x33f4(_0x16889e,_0x1c73fc){const _0x1eb92e=_0x239e();return _0x33f4=function(_0x267843,_0x400670){_0x267843=_0x267843-0x18c;let _0x33ec05=_0x1eb92e[_0x267843];return _0x33ec05;},_0x33f4(_0x16889e,_0x1c73fc);}if(type===_0x3241a7(0x18e)){let aud=images[Math[_0x3241a7(0x191)](Math[_0x33ce70(0xb8)]()*images[_0x33ce70(0xa2)])],buff=await getBuffer(aud);await message[_0x33ce70(0xab)][_0x3241a7(0x1a2)](message[_0x3241a7(0x18f)],{'image':buff,'mimetype':_0x3241a7(0x190),'fileLength':fileLength,'caption':caption,'contextInfo':{'externalAdReply':{'title':title,'body':body,'sourceUrl':sourceUrl,'mediaUrl':mediaUrl,'mediaType':mediaType,'showAdAttribution':showAdAttribution,'renderLargerThumbnail':renderLargerThumbnail,'thumbnailUrl':thumbnailUrl}}});}if(type===_0x3241a7(0x19a)){let aud=stickers[Math[_0x3241a7(0x191)](Math['random']()*stickers[_0x3241a7(0x196)])],buff=await getBuffer(aud);await message[_0x3241a7(0x19d)][_0x3241a7(0x1a2)](buff,{'packname':config[_0x33ce70(0xa4)][_0x3241a7(0x1a1)](';')[0x0],'author':config[_0x3241a7(0x19f)][_0x3241a7(0x1a1)](';')[0x1],'fileLength':fileLength,'contextInfo':{'externalAdReply':{'title':title,'body':body,'sourceUrl':sourceUrl,'mediaUrl':mediaUrl,'mediaType':mediaType,'showAdAttribution':showAdAttribution,'renderLargerThumbnail':renderLargerThumbnail,'thumbnailUrl':thumbnailUrl}}},_0x33ce70(0x99));}function _0x239e(){const _0x2c4a21=_0x33ce70,_0x3697e7=[_0x2c4a21(0x9e),_0x2c4a21(0xa8),'4315056tDZPwO',_0x2c4a21(0x9f),'5411790xSogCN',_0x2c4a21(0xa2),_0x2c4a21(0x9b),'text','audio/mpeg','sticker',_0x2c4a21(0xa3),'6829086HuUQmC',_0x2c4a21(0xab),_0x2c4a21(0xb4),_0x2c4a21(0xa4),_0x2c4a21(0xae),_0x2c4a21(0xa1),_0x2c4a21(0x9d),'random',_0x2c4a21(0xad),_0x2c4a21(0xa9),'jid',_0x2c4a21(0xb9)];return _0x239e=function(){return _0x3697e7;},_0x239e();}type===_0x3241a7(0x198)&&await message[_0x3241a7(0x19d)][_0x33ce70(0x9d)](message[_0x3241a7(0x18f)],{'text':text,'contextInfo':{'externalAdReply':{'title':title,'body':body,'sourceUrl':sourceUrl,'mediaUrl':mediaUrl,'mediaType':mediaType,'showAdAttribution':showAdAttribution,'renderLargerThumbnail':renderLargerThumbnail,'thumbnailUrl':thumbnailUrl}}});
}catch(error){
return message.reply(error)
}
});
