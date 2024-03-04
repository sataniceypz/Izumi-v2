const { command, isPrivate } = require("../lib/");
const config = require("../config");
const { SUDO } = require("../config");
command(
  { pattern: "gsudo ?(.*)", 
    fromMe: isPrivate, 
    desc: "shows sudo numbers", 
    type: "heroku" 
  },
  async (message, match, mm) => {
    let zeta = config.SUDO
message.reply("```" + `SUDO number are : ${zeta}` + "```")
  }
);
