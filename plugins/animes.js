const { command, isPrivate } = require("../lib");
const axios = require('axios');
command(
 {
     pattern: "random-anime-s",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
  const img = "https://itzpire.site/random/sticker-anime";
  

  const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz 
command(
 {
     pattern: "kiss",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/kiss');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "cuddle",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/cuddle');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "cry",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/cry');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "hug",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/hug');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "awoo",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/awoo');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "lick",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/lick');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "pat",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/pat');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "smug",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/smug');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "bonk",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/bonk');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "yeet",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/yeet');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "blush",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/blush');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "smile",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/smile');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "wave",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/wave');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "highfive",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/highfive');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "handhold",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/handhold');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "nom",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/nom');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "bite",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/bite');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "glomp",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/glomp');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "slap",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/slap');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "kill",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/kill');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "s-kick",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/kick');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "happy",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/happy');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "wink",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/wink');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "poke",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/poke');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "dance",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/dance');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "wa.me/917994489493",
          mediaUrl: "wa.me/917994489493",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
//sataniceypz
command(
 {
     pattern: "cringe",
     fromMe: isPrivate,
     desc: "random anime sticker",
     type: "anime",
},
async (m, message, match) => {
    var res = await axios.get('https://api.waifu.pics/sfw/cringe');
    var img = res.data.url;
 const buff = await getBuffer(img);
  
  m.sendMessage(
    buff,
    {
      packname: config.STICKER_DATA.split(";")[0],
      author: config.STICKER_DATA.split(";")[1],
      contextInfo: {
        externalAdReply: {
          title: "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
          body: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗔𝗻𝗶𝗺𝗲 𝗦𝘁𝗶𝗰𝗸𝗲𝗿",
          sourceUrl: "",
          mediaUrl: "",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: false,
          thumbnailUrl: "https://i.imgur.com/2l84KSg.jpeg"
        }
      }
    },
    "sticker"
  );
});
