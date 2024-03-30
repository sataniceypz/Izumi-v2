const axios = require('axios')
const cheerio = require('cheerio')
const { command, isPrivate } = require("../lib/");
command(
    {
        pattern: "mediafire",
        fromMe: isPrivate,
        desc: "Mediafire Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need A Mediafire Url_*");
const mediafiredownload = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const response = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const name = seplit[5]
mime = name.split('.')
mime = mime[1]
response.push({ name, mime, size, link })
return response
}
var zeta = await mediafiredownload(`${match}`)
await message.client.sendMessage(message.jid, { text: `*_Downloading ${zeta[0]['name']}_*\n\n*size : ${zeta[0]['size']}*\n\n𝐄𝐙𝐑𝐀-𝐗𝐃` },{ quoted: message});
await message.client.sendMessage(message.jid, { document :{ url: zeta[0]['link'] }, fileName: zeta[0]['name'] , mimetype: zeta[0]['mime'] }, {quoted: message })
}
);
