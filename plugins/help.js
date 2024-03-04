const { command, isPrivate } = require("../lib/");
command(
  {
    pattern: "help",
    fromMe: isPrivate,
    desc: "developer vcard",
    type: "user",
  },
  async (message, match, m, client) => {
  const zeta = {
  'contacts': {
    'displayName': "𝐄𝐙𝐑𝐀-𝐗𝐃",
    'contacts': [{
      'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:𝐄𝐙𝐑𝐀-𝐗𝐃\nORG:EZRA-XD BOT;\nTEL;type=CELL;type=VOICE;waid=919747257996:919747257996\nEND:VCARD"
    }]
  },
  'contextInfo': {
    'externalAdReply': {
      'title': "➵⃞𝐄𝐙𝐑𝐀-𝐗𝐃",
      'body': "𝙛𝙤𝙧 𝙝𝙚𝙡𝙥👀𝙘𝙡𝙞𝙘𝙠 𝙝𝙚𝙧𝙚",
      'thumbnailUrl': "https://i.imgur.com/Ou56ggv.jpeg",
      'mediaType': 0x1,
      'mediaUrl': "http://wa.me/+919747257996?text=ｈｉ+ｚｅｔａ+ｓｅｒ",
      'sourceUrl': "http://wa.me/+919747257996?text=ｈｉ+ｚｅｔａ+ｓｅｒ",
      'showAdAttribution': true
    }
  }
};
message.client.sendMessage(message.jid, zeta, {
  quoted: message
});
}
);
