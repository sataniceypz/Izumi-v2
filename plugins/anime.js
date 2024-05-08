const { command, isPrivate, getBuffer, getJson } = require("../lib");
const fetch = require("node-fetch");
const { CAPTION } = require("../config");
const axios = require('axios');
command({
  pattern: "waifu",
  fromMe: true,
  desc: "waifuuuu",
  type: "anime",
  }, async (m, message, match) => {
    var res = await axios.get('https://api-ironman444ff.koyeb.app/ironman/waifu');
    var img = res.data.ironman.url;
    await m.sendFromUrl(img);
    });