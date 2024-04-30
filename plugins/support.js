const { getJson, getBuffer, command, isPrivate, sleep } = require("../lib/");

command({
    pattern: "help",
    fromMe: isPrivate,
    desc: "Izumi Support",
    type: "support"
}, async (message) => {
    const name = 'Eʏᴘᴢ ☔', title = "Iᴢᴜᴍɪ Sᴜᴘᴘᴏʀᴛ🧚‍♂️", number = '917994489493', body = "Eʏᴘᴢ☔";
    const image = "https://i.imgur.com/JS0TpvM.jpeg", sourceUrl = 'https://github.com/sataniceypz/Izumi-v2';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: powered by Izumi;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.jid, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});