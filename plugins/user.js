const plugins = require("../lib/event");
const {
    command,
    isPrivate,
    clockString,
    getUrl,
    parsedJid,
    isAdmin
    
} = require("../lib");
const {
    BOT_INFO
} = require("../config");
const config = require("../config");
const { tiny } = require("../lib/fancy_font/fancy");
const Jimp = require("jimp");
const got = require("got");
const fs = require("fs");
const { PluginDB, installPlugin } = require("../lib/database/plugins");

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
    {
        pattern: "ping",
        fromMe: isPrivate,
        desc: "To check ping",
        type: "user",
    },
    async (message, match, client) => {
        const start = new Date().getTime();
      let { key } = await message.sendMessage(`*𝙿𝚒𝚗𝚐 ㋞*`);
        const end = new Date().getTime();
var speed = end - start;
 
await new Promise(t => setTimeout(t,0))
         await message.client.sendMessage(message.jid,{text:`*𝙿𝚘𝚗𝚐* ㋚
${speed} *𝚖𝚜*` , edit: key});
})

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/


command(
  {
    pattern: "pp$",
    fromMe: true,
    desc: "Set full screen profile picture",
    type: "user",
  },
  async (message, match,m) => {
    if (!message.reply_message.image)
      return await message.reply("*_Reply to a photo_*");
    let media = await m.quoted.download();
    await updateProfilePicture(message.user, media, message);
    return await message.reply("*_Profile Picture Updated_*");
  }
);

async function updateProfilePicture(jid, imag, message) {
  const { query } = message.client;
  const { img } = await generateProfilePicture(imag);
  await query({
    tag: "iq",
    attrs: {
      to: jid,
      type: "set",
      xmlns: "w:profile:picture",
    },
    content: [
      {
        tag: "picture",
        attrs: { type: "image" },
        content: img,
      },
    ],
  });
}

async function generateProfilePicture(buffer) {
  const jimp = await Jimp.read(buffer);
  const min = jimp.getWidth();
  const max = jimp.getHeight();
  const cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(324, 720).getBufferAsync(Jimp.MIME_JPEG),
    preview: await cropped.normalize().getBufferAsync(Jimp.MIME_JPEG),
  };
}


/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "block",
    fromMe: true,
    desc: "Block a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("*_Need a number/reply/mention!_*");
      await message.block(jid);
      return await message.sendMessageMessage(`_@${jid.split("@")[0]} Blocked_`, {
        mentions: [jid],
      });
    } else {
      await message.block(message.jid);
      return await message.reply("_User blocked_");
    }
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "unblock",
    fromMe: true,
    desc: "Unblock a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("*_Need a number/reply/mention!_*");
      await message.block(jid);
      return await message.sendMessage(`*_@${jid.split("@")[0]} unblocked_*`, {
        mentions: [jid],
      });
    } else {
      await message.unblock(message.jid);
      return await message.reply("*_User unblocked_*");
    }
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-X0
*/

command(
  {
    pattern: "jid",
    fromMe: true,
    desc: "Give jid of chat/user",
    type: "user",
  },
  async (message, match) => {
    return await message.sendMessage(
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);

/* Copyright (C) 2024 Louis-X0.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-X0
*/

command(
  {
    pattern: "dlt",
    fromMe: true,
    desc: "deletes a message",
    type: "user",
  },
  async (message, match,m,client) => {
    if (!message.reply_message) return await message.reply("*_Reply to a message_*"); {
      await client.sendMessage(message.jid, { delete: message.reply_message.key })
    }
  }
);


/* Copyright (C) 2024 Louis-X0.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-X0
*/


command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show All Commands",
    dontAddCommandList: true,
    type: "user",
  },
  async (message, match, m, client) => {
try{
    if (match) {
      for (let i of plugins.commands) {
        if (
          i.pattern instanceof RegExp &&
          i.pattern.test(message.prefix + match)
        ) {
          const cmdName = i.pattern.toString().split(/\W+/)[1];
          message.reply(`\`\`\`Command: ${message.prefix}${cmdName.trim()}
Description: ${i.desc}\`\`\``);
        }
      }
    } else {
      let { prefix } = message;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
        let usern = message.pushName
        const readMore = String.fromCharCode(8206).repeat(4001);
      let menu = `\n╭━━━〔 ${BOT_INFO.split(";")[0]} 〕━━━┈
    ╭──────────────
  〄 │  *OWNER*: ${BOT_INFO.split(";")[1]}
  〄 │  *USER*: ${usern}
  〄 │  *DATE*: ${date}
  〄 │  *TIME*: ${time}
  〄 │  *COMMANDS*: ${plugins.commands.length}
  〄 │  *MODE*: ${config.WORK_TYPE}
  〄 │  *PREFIX*: ${config.HANDLERS}
  〄 │  *VERSION*: ${require("../package.json").version}
    ╰──────────────
╰━━━━━━━━━━━━━━━┈\n ${readMore}`

      let cmnd = [];
      let cmd;
      let category = [];
      plugins.commands.map((command, num) => {
        if (command.pattern instanceof RegExp) {
          cmd = command.pattern.toString().split(/\W+/)[1];
        }

        if (!command.dontAddCommandList  && cmd !== undefined) {
          let type = command.type ? command.type.toLowerCase() : "misc";

          cmnd.push({ cmd, type });

          if (!category.includes(type)) category.push(type);
        }
      });
      cmnd.sort();
      category.sort().forEach((cmmd) => {
        menu += `\n ╭─────────────┈⚆`;
        menu += `\n  │ 「 *${cmmd.toUpperCase()}* 」`;
        menu += `\n ╰┬────────────┈⚆`
        menu += `\n ╭┴────────────┈⚆`;
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }) => {
          menu += `\nཐིཋྀ  ${cmd.trim()}`;
        });
        menu += `\n ╰─────────────┈⚆`;
      });
menu += `\n\n𝐄𝐙𝐑𝐀-𝐗𝐃`;
      let penu = tiny(menu)
      let img = config.BOT_INFO.split(';')[2]
      return await message.sendFromUrl(img, {fileLength: "5555544444", gifPlayback: true, contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (penu)}, {quoted: message })
    }
}catch(e){
message.reply(e)
}
  }
);


/* Copyright (C) 2024 Louis-X0.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-X0
*/

command(
  {
    pattern: "list",
    fromMe: isPrivate,
    desc: "Show All Commands",
    type: "user",
    dontAddCommandList: true,
  },
  async (message, match, { prefix }) => {
    let menu = `╭───────┈┫「 *𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐋𝐢𝐬𝐭* 」┣┈────♡`;
    menu += `\n│\n`;

    let cmnd = [];
    let cmd, desc;
    plugins.commands.map((command) => {
      if (command.pattern) {
        cmd = command.pattern.toString().split(/\W+/)[1];
      }
      desc = command.desc || false;

      if (!command.dontAddCommandList && cmd !== undefined) {
        cmnd.push({ cmd, desc });
      }
    });
    cmnd.sort();
    cmnd.forEach(({ cmd, desc }, num) => {
      menu += `│  ${(num += 1)}. *${cmd.trim()}*`;
      if (desc) menu += `\n│  Use: \`\`\`${desc}\`\`\``;
      menu += `\n│\n`;
    });
    menu += `╰───────┈┫「 𝐄𝐙𝐑𝐀-𝐗𝐃-𝐁𝐎𝐓 」┣┈────♡`;
    return await message.reply(message.jid, { text: (tiny(menu)), contextInfo: { externalAdReply: {
title: "𝚵𝚭𝚪𝚫-𝚾𝐃",
sourceUrl: "",
mediaUrl: "https://instagram.com/abhiiiiiyh",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/PlDhcfI.jpeg" }} }) })



/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "install ?(.*)",
    fromMe: true,
    desc: "Install External plugins",
    type:'user'
  },
  async (message, match) => {
    if (!match) return await message.sendMessage("*_Send a plugin url_*");
    for (let Url of getUrl(match)) {
      try {
        var url = new URL(Url);
      } catch {
        return await message.sendMessage("*_Invalid Url_*");
      }

      if (url.host === "gist.github.com") {
        url.host = "gist.githubusercontent.com";
        url = url.toString() + "/raw";
      } else {
        url = url.toString();
      }
      var plugin_name;
      var response = await got(url);
      if (response.statusCode == 200) {
        var commands = response.body
          .match(/(?<=pattern:)(.*)(?=\?(.*))/g)
          .map((a) => a.trim().replace(/"|'|`/, ""));
        plugin_name =
          commands[0] ||
          plugin_name[1] ||
          "__" + Math.random().toString(36).substring(8);

        fs.writeFileSync("./plugins/" + plugin_name + ".js", response.body);
        try {
          require("./" + plugin_name);
        } catch (e) {
          fs.unlinkSync("/xasena/plugins/" + plugin_name + ".js");
          return await message.sendMessage("*_Invalid Plugin_*\n ```" + e + "```");
        }

        await installPlugin(url, plugin_name);

        await message.sendMessage(
          `*_New plugin installed : ${commands.join(",")}_*`
        );
      }
    }
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  { 
      pattern: "plugin", 
      fromMe: true, 
      desc: "plugin list",
      type:'user'},
  async (message, match) => {
    var mesaj = "";
    var plugins = await PluginDB.findAll();
    if (plugins.length < 1) {
      return await message.sendMessage("*_No external plugins installed_*");
    } else {
      plugins.map((plugin) => {
        mesaj +=
          "```" +
          plugin.dataValues.name +
          "```: " +
          plugin.dataValues.url +
          "\n";
      });
      return await message.sendMessage(mesaj);
    }
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "remove(?: |$)(.*)",
    fromMe: true,
    desc: "Remove external plugins",
    type:'user'
  },
  async (message, match) => {
    if (!match) return await message.sendMessage("*_Need a plugin name_*");

    var plugin = await PluginDB.findAll({ where: { name: match } });

    if (plugin.length < 1) {
      return await message.sendMessage("*_Plugin not found_*");
    } else {
      await plugin[0].destroy();
      delete require.cache[require.resolve("./" + match + ".js")];
      fs.unlinkSync("./plugins/" + match + ".js");
      await message.sendMessage(`Plugin ${match} deleted`);
    }
  }
);


command(
    {
	pattern: 'setbio(.*)',
	fromMe: true,
	desc: 'to change your profile status',
	type: 'user'
}, async (message, match) => {
	match = match || message.reply_message.text
	if (!match) return await message.reply('*_Need Text_!*\n *Example: setbio _Ezra-XD_*.')
	await message.client.updateProfileStatus(match)
	await message.reply('*_Successfully bio updated_*')
})

