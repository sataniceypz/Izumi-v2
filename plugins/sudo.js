const { command, isPrivate } = require("../lib/");
const X = require("../config");
const { SUDO } = require("../config");
command(
  { pattern: "getsudo ?(.*)", 
    fromMe: isPrivate, 
    desc: "shows sudo numbers", 
    type: "heroku" 
  },
  async (message, match, mm) => {
    let zeta = X.SUDO
message.reply("```" + `SUDO number are : ${zeta}` + "```")
  }
);

// Zeta-XD 😦
