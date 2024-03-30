const Heroku = require('heroku-client');
const axios = require("axios");
const config = require("../config");
const heroku = new Heroku({ token: config.HEROKU_API_KEY });
const { command } = require("../lib");

command({
        pattern: "setvar ?(.*)",
        fromMe: true,
        desc: "Set heroku config var",
        type: "heroku"
}, async (message, match) => {
        if (!match) return await message.reply('```Either Key or Value is missing```');
const [key, value] = match.split(':');
        if (!key || !value) return await message.reply('setvar STICKER_DATA: zeta-xd;badan ser');
        await heroku.patch('/apps/' + config.HEROKU_APP_NAME + '/config-vars', {
                body: {
                        [key.trim().toUpperCase()]: match.replace(key,'').replace(':','').trim()
                }
        }).then(async () => {
                await message.reply('Successfully Set ' + '```' + key + ' ➜ ' + match.replace(key,'').replace(':','').trim() + '```')
        }).catch(async (error) => {
                await message.reply(`HEROKU : ${error.body.message}`)
        })
});

command({
        pattern: "delvar ?(.*)",
        fromMe: true,
        desc: "Delete heroku config var",
        type: "heroku"
}, async (message, match) => {
        if (!match) return await message.reply('```Either Key or Value is missing```');
await heroku.get('/apps/' + config.HEROKU_APP_NAME + '/config-vars').then(async (vars) => {
                for (vr in vars) {
                        if (match == vr) {
                                await heroku.patch('/apps/' + config.HEROKU_APP_NAME + '/config-vars', {
                                        body: {
                                                [match.toUpperCase()]: null
                                        }
                                });
                                return await message.reply('```{} successfully deleted```'.replace('{}', match));
                        }
                }
                await message.reply('```No results found for this key```');
        }).catch(async (error) => {
                await message.reply(`HEROKU : ${error.body.message}`);
        });
});
