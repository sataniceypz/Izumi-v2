const { command, isPrivate } = require("../lib/");
command(
  {
    pattern: "owner",
    fromMe: isPrivate,
    desc: "developer vcard",
    type: "user",
  },
  async (message, match, m, client) => {
  const zeta = {
  'contacts': {
    'displayName': "𝐙𝐞𝐭𝐚-𝐗𝐃",
    'contacts': [{
      'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:𝐙𝐄𝐓𝐀-𝐗𝐃\nORG:Zeta-XD;\nTEL;type=CELL;type=VOICE;waid=919747257996:919747257996\nEND:VCARD"
    }]
  },
  'contextInfo': {
    'externalAdReply': {
      'title': "𝐙𝐞𝐭𝐚𝐚𝐡𝐡 ⛮",
      'body': "ᴢᴇᴛᴀ-xᴅ ᴅᴇᴠᴇʟᴏᴩᴇʀ",
      'thumbnailUrl': "https://i.imgur.com/xJV2r3g.jpeg",
      'mediaType': 0x1,
      'mediaUrl': "http://wa.me/+919747257996?text=Hi+Badan-Ser+Im+From+Zeta-XD+Git",
      'sourceUrl': "http://wa.me/+919747257996?text=Hi+Badan-Ser+Im+From+Zeta-XD+Git",
      'showAdAttribution': false
    }
  }
};
message.client.sendMessage(message.jid, zeta, {
  quoted: message
});
}
);
