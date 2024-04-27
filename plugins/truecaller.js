const { command, isPrivate } = require ("../lib");
const axios = require("axios");
const { tiny } = require("../lib/fancy_font/fancy");

command({
pattern: "true",
fromMe: isPrivate,
desc: "true caller search",
type: "search"
},
async (message, match, m, client)=>{
try{
match = match || (message.reply_message.jid.split("@")[0]);
    const installationId = 'a1i05--log7Ae-hk9y85780NEfKnif3z77XFt4zZn7Bi10zGXS0qVduxj7CRHxQw';
    const apiUrl = `https://sid-bhai.vercel.app/api/truecaller?phone=${encodeURIComponent(match)}&id=${installationId}`;

let response = await axios.get(apiUrl);
    console.log(response);
    let json = response.data;

    const { name, alternateName, addresses, email, countryDetails } = await json;

let res = `│ *NAME* : ${name}\n│ *NICKNAME* : ${alternateName}\n│ *PHONE* : ${match}\n│ *EMAIL* : ${email}\n│ *CITY* : ${addresses[0].city}\n│ *COUNTRY* : ${countryDetails.name}\n│ *TIMEZONE* : ${addresses[0].timeZone}\n│ *FLAG* : ${countryDetails.flag}`
let msg = `╔╺╺ ❲ truecaller ❳╺⚭\n│\n${res}\n╚╺╺╺╺╺╺╺⚭`;
let d = tiny(msg)
	return await message.client.sendMessage(message.jid, { text: d, contextInfo: {
      
      mentionedJid: [m.sender],
forwardingScore: 999,
      isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363239634100086@newsletter',
                newsletterName: "𝗜𝗭𝗨𝗠𝗜-𝗫𝗗🧚‍♂️",
                serverMessageId: -1
            }} }, {quoted: message })
}catch(error){
message.reply("*_Need Number/reply to someone_*")
}
});
