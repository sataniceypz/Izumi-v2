const got = require("got");
const Heroku = require("heroku-client");
const { command, isPrivate, tiny } = require("../lib/");
const Config = require("../config");
const heroku = new Heroku({ token: Config.HEROKU_API_KEY });
const baseURI = "/apps/" + Config.HEROKU_APP_NAME;
const simpleGit = require("simple-git");
const { secondsToDHMS } = require("../lib");
const git = simpleGit();
const exec = require("child_process").exec;
const { SUDO } = require("../config");

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "restart",
    fromMe: true,
    type: "heroku",
    desc: "Restart Dyno",
    type: "heroku",
  },
  async (message) => {
    await message.sendMessage(`*_Restarting!, it take time_*`);
    await heroku.delete(baseURI + "/dynos").catch(async (error) => {
      await message.sendMessage(`HEROKU : ${error.body.message}`);
    });
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "shutdown",
    fromMe: true,
    type: "heroku",
    desc: "Dyno off",
    type: "heroku",
  },
  async (message) => {
    await heroku
      .get(baseURI + "/formation")
      .then(async (formation) => {
        await message.sendMessage(`*_Shutting down._*`);
        await heroku.patch(baseURI + "/formation/" + formation[0].id, {
          body: {
            quantity: 0,
          },
        });
      })
      .catch(async (error) => {
        await message.sendMessage(`HEROKU : ${error.body.message}`);
      });
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
X-Asena - X-Electra
*/

command(
  {
    pattern: "dyno",
    fromMe: true,
    desc: "Show Quota info",
    type: "heroku",
  },
  async (message) => {
    try {
      heroku
        .get("/account")
        .then(async (account) => {
          const url = `https://api.heroku.com/accounts/${account.id}/actions/get-quota`;
          headers = {
            "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
            Authorization: "Bearer " + Config.HEROKU_API_KEY,
            Accept: "application/vnd.heroku+json; version=3.account-quotas",
          };
          const res = await got(url, { headers });
          const resp = JSON.parse(res.body);
          const total_quota = Math.floor(resp.account_quota);
          const quota_used = Math.floor(resp.quota_used);
          const remaining = total_quota - quota_used;
          const quota = `Total Quota : ${secondsToDHMS(total_quota)}
Used  Quota : ${secondsToDHMS(quota_used)}
Remaning    : ${secondsToDHMS(remaining)}`;
          await message.sendMessage("```" + quota + "```");
        })
        .catch(async (error) => {
          return await message.sendMessage(`HEROKU : ${error.body.message}`);
        });
    } catch (error) {
      await message.sendMessage(error);
    }
  }
);


command(
  {
    pattern: "allvar",
    fromMe: true,
    type: "heroku",
    desc: "Heroku all env",
    type: "heroku",
  },
  async (message) => {
    let msg = "```Here your all Heroku vars\n\n\n";
    heroku
      .get(baseURI + "/config-vars")
      .then(async (keys) => {
        for (const key in keys) {
          msg += `${key} : ${keys[key]}\n\n`;
        }
        return await message.sendMessage(msg + "```");
      })
      .catch(async (error) => {
        await message.sendMessage(`HEROKU : ${error.body.message}`);
      });
  }
);

/* Copyright (C) 2022 X-Electra.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Louis-X0 - Zeta-X0
*/

command(
  {
    pattern: "update",
    fromMe: true,
    type: "heroku",
    desc: "Checks for update.",
  },
  async (message, match,) => {
    let {prefix} = message
    if (match === "now") {
      await git.fetch();
      var commits = await git.log([
        Config.BRANCH + "..origin/" + Config.BRANCH,
      ]);
      if (commits.total === 0) {
        return await message.sendMessage("*_Bot Is Up-to-Date_*");
      } else {
        await message.reply("*_Update Started_*");

        try {
          var app = await heroku.get("/apps/" + Config.HEROKU_APP_NAME);
        } catch {
          await message.sendMessage("_Invalid Heroku Details_");
          await new Promise((r) => setTimeout(r, 1000));
        }

        git.fetch("upstream", Config.BRANCH);
        git.reset("hard", ["FETCH_HEAD"]);

        var git_url = app.git_url.replace(
          "https://",
          "https://api:" + Config.HEROKU_API_KEY + "@"
        );

        try {  
          await git.addRemote("heroku", git_url);
        } catch {
          console.log("heroku remote error");
        }
        await git.push("heroku", Config.BRANCH);

        await message.sendMessage("*_Successfully Updated, Restarting-it take time_*");
      }
    }
    await git.fetch();
    var commits = await git.log([Config.BRANCH + "..origin/" + Config.BRANCH]);
    if (commits.total === 0) {
      await message.sendMessage("*_No Updates Available_*");
    } else {
      var availupdate = "*ᴜᴘᴅᴀᴛᴇs ᴀʀᴇ ᴀᴠᴀɪʟᴀʙʟᴇ* \n\n";
      commits["all"].map((commit, num) => {
        availupdate += num + 1 + " ⋆ " + (commit.message) + "\n";
      });
      return await message.client.sendMessage(message.jid, {
        text: availupdate,
        footer: ("click here to update"),
      });
    }
  }
);


        

command(
  {
    pattern: "update now",
    fromMe: true,
    type: "heroku",
    desc: "Updates the bot",
  },
  async (message) => {}
);

//Credits Zeta-X0
//created by Abhiy

command(
  { pattern: "getsudo ?(.*)", 
    fromMe: true, 
    desc: "shows sudo numbers", 
    type: "heroku" 
  },
  async (message, match, mm) => {
    const vars = await heroku
      .get(baseURI + "/config-vars")
      .catch(async (error) => {
        return await message.send("HEROKU : " + error.body.message);
      });
    await message.sendMessage("```" + `SUDO number are : ${config.SUDO}` + "```");
  }
);

command(
  { pattern: "setsudo ?(.*)", fromMe: true, desc: "set new sudo", type: "heroku" },
  async (message, mm) => {
    var newSudo = (message.reply_message ? message.reply_message.jid : "" || mm).split(
      "@"
    )[0];
    if (!newSudo)
      return await message.sendMessage("*Need reply/mention/number*", { quoted: message });
    var setSudo = (SUDO + "," + newSudo).replace(/,,/g, ",");
    setSudo = setSudo.startsWith(",") ? setSudo.replace(",", "") : setSudo;
    await message.sendMessage("```new sudo numbers are: ```" + setSudo, {
      quoted: message,
    });
    await message.sendMessage("_It takes 30 seconds to make effect_", { quoted: message });
    await heroku
      .patch(baseURI + "/config-vars", { body: { SUDO: setSudo } })
      .then(async (app) => {});
  }
);

command(
  {
    pattern: "delsudo ?(.*)",
    fromMe: true,
    desc: "delete sudo number",
    type: "heroku",
  },
  async (message, mm) => {
    var newSudo = (message.reply_message ? message.reply_message.jid : "" || mm).split(
      "@"
    )[0];
    if (!newSudo) return await message.sendMessage("*Need reply/mention/number*");
    var setSudo = SUDO.replace(newSudo, "").replace(/,,/g, ",");
    setSudo = setSudo.startsWith(",") ? setSudo.replace(",", "") : setSudo;
    await message.sendMessage("```new sudo numbers are: ```" + setSudo, {
      quoted: message,
    });
    await message.sendMessage("_It takes 30 seconds to make effect_", { quoted: message });
    await heroku
      .patch(baseURI + "/config-vars", { body: { SUDO: setSudo } })
      .then(async (app) => {});
  }
);
