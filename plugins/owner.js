const { command, isPrivate } = require("../lib/");
command(
  {
    pattern: "owner",
    fromMe: isPrivate,
    desc: "owner vcard",
    type: "user",
  },
  async (message, match, m, client) => {
  const zeta = {
  'contacts': {
    'displayName': "𝐋𝐨𝐮𝐢𝐬-𝐗𝐃",
    'contacts': [{
      'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:𝐄𝐙𝐑𝐀-𝐗𝐃\nORG:Louis-XD;\nTEL;type=CELL;type=VOICE;waid=33757050684:33757050684\nEND:VCARD"
    }]
  },
  'contextInfo': {
    'externalAdReply': {
      'title': "𝐄𝐙𝐑𝐀-𝐗𝐃",
      'body': "𝗘𝗭𝗥𝗔 𝗫𝗗 𝗢𝗪𝗡𝗘𝗥",
      'thumbnailUrl': "https://i.imgur.com/pae05LQ.jpeg",
      'mediaType': 0x1,
      'mediaUrl': "http://wa.me/+33757050684?text=Hi+Louis+Im+From+EZRA+XD+Git",
      'sourceUrl': "http://wa.me/+33757050684?text=Hi+Louis+Im+From+EZRA+XD+Git",
      'showAdAttribution': true
    }
  }
};
message.client.sendMessage(message.jid, zeta, {
  quoted: message
});
}
);
