const { command } = require("../lib/");
const axios = require("axios");
command(
    {
        pattern: "script",
        fromMe: false,
        desc: "ezra xd repo",
        type: "user",
    },
    async (message, match, m, client) => {
        let { data } = await axios.get('https://api.github.com/repos/Zeta-XD/REPO-TESTs')
        let cap = `\n𝐄𝐙𝐑𝐀-𝐗𝐃 𝐒𝐂𝐑𝐈𝐏𝐓\n\n
⛁ *REPO* : soon\n
⛁ *BIO* :  A Simple WhatsApp Bot\n
⛁ *LANGUAGE* : JavaScript\n
⛁ *STARS* : 99999 stars\n
⛁ *FORKS* : 100000 forks\n
⛁ *PLUGINS* : coming soon\n`
        
        return await message.client.relayMessage(message.jid,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 699999000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: cap,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
          });
