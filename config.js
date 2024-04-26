const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID:process.env.SESSION_ID || " ",
  LANG: process.env.LANG || "EN",
  HANDLERS: process.env.PREFIX || '^[.]',
  BRANCH: "main",
  WARN_COUNT: 3,
  STICKER_DATA: process.env.STICKER_DATA || "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗;𝐄𝐘𝐏𝐙",
  BOT_INFO: process.env.BOT_INFO || "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗;𝐄𝐘𝐏𝐙;https://i.imgur.com/Uc0uIkO.jpeg",
  AUDIO_DATA: process.env.AUDIO_DATA || "𝐄𝐘𝐏𝐙;𝗜𝗭𝗨𝗠𝗜 𝗫𝗗;https://i.imgur.com/Uc0uIkO.jpeg",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  CAPTION: process.env.CAPTION || "𝗜𝗭𝗨𝗠𝗜 𝗫𝗗",
  WORK_TYPE: process.env.WORK_TYPE || "private",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  SUDO: process.env.SUDO || "0",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
};
