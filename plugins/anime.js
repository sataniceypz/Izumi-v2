const { command, isPrivate } = require("../lib");
const axios = require('axios');
command({
  pattern: "waifu",
  fromMe: isPrivate,
  desc: "waifuuuu",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api-ironman444ff.koyeb.app/ironman/waifu');
    var img = res.data.ironman.url;
    await m.sendFromUrl(img);
    });
//IRON-M4N
command({
  pattern: "neko",
  fromMe: isPrivate,
  desc: "waifuuuu",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api-ironman444ff.koyeb.app/ironman/neko');
    var img = res.data.ironman.url;
    await m.sendFromUrl(img);
    });
//IRON-M4N
