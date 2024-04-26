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
    'displayName': "𝐄𝐘𝐏𝐙",
    'contacts': [{
      'vcard': "BEGIN:VCARD\nVERSION:3.0\nFN:𝐄𝐘𝐏𝐙\nORG:Eypz\nTEL;type=CELL;type=VOICE;waid=917994489493:917994489493\nEND:VCARD"
    }]
  },
  'contextInfo': {
    'externalAdReply': {
      'title': "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗🧚‍♂️",
      'body': "𝐄𝐘𝐏𝐙",
      'thumbnailUrl': "https://i.imgur.com/Uc0uIkO.jpeg",
      'mediaType': 0x1,
      'mediaUrl': "http://wa.me/917994489493",
      'sourceUrl': "http://wa.me/917994489493",
      'showAdAttribution': false
    }
  }
};
message.client.sendMessage(message.jid, zeta, {
  quoted: message
});
}
);
