const { command, isPrivate } = require("../lib/");
command(
  {
    pattern: "help",
    fromMe: isPrivate,
    desc: "helper vcard",
    type: "user",
  },
  async (message, match, m, client) => {
  const zeta = {
  'contacts': {
    'displayName': "𝐙𝐞𝐭𝐚-𝐗𝐃",
    'contacts': [{
      'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:𝐄𝐙𝐑𝐀-𝐗𝐃\nORG:Zeta-XD;\nTEL;type=CELL;type=VOICE;waid=919747257996:919747257996\nEND:VCARD"
    }]
  },
  'contextInfo': {
    'externalAdReply': {
      'title': "𝐄𝐙𝐑𝐀-𝐗𝐃",
      'body': "ᴇᴢʀᴀ-xᴅ ᴅᴇᴠᴇʟᴏᴩᴇʀ",
      'thumbnailUrl': "https://i.imgur.com/pae05LQ.jpeg",
      'mediaType': 0x1,
      'mediaUrl': "http://wa.me/+919747257996?text=Hi+Zeta+Im+From+EZRA+XD+Git",
      'sourceUrl': "http://wa.me/+919747257996?text=Hi+Zeta+Im+From+EZRA+XD+Git",
      'showAdAttribution': true
    }
  }
};
message.client.sendMessage(message.jid, zeta, {
  quoted: message
});
}
);
