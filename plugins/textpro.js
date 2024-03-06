const X = "*Converted By Ezra-XD*"
const R = '_*Need Text*_\n*Example: .gfx ezra|xd*'
const { command, isPrivate } = require("../lib/");
const { ephoto, textpro, photooxy } = require("mumaker");
const tp = "https://textpro.me/"
const en = "https://en.ephoto360.com/"
const px = "https://photooxy.com/"

command({
	pattern: 'bear ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}online-black-and-white-bear-mascot-logo-creation-1012.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'blood ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}horror-blood-text-effect-online-883.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'steel ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await ephoto(`${en}steel-text-effect-66.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'sed ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await ephoto(`${en}write-text-on-wet-glass-online-589.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'thor ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await ephoto(`${en}create-thor-logo-style-text-effects-online-for-free-796.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'hacker ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await ephoto(`${en}create-anonymous-hacker-avatars-cyan-neon-677.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'tgraphy ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await ephoto(`${en}create-online-typography-art-effects-with-multiple-layers-811.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'lolb ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await ephoto(`${en}name-cover-lol-create-cover-that-league-of-legends-league-of-legends-banners-218.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'crossfire ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await ephoto(`${en}crossfire-cover-222.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'lolf ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await ephoto(`${en}general-fiora-lol-cover-43.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'gate ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await ephoto(`${en}write-your-name-on-horror-cemetery-gate-597.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'winter ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}create-winter-cold-snow-text-effect-online-1100.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'neon ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}neon-light-text-effect-online-882.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'avengers ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}create-3d-avengers-logo-online-974.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'sliced ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}create-light-glow-sliced-text-effect-online-1068.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: '3dneon ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}create-3d-neon-light-text-effect-online-1028.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'burning ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}online-real-burning-text-effect-generator-1151.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'sand ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}sand-writing-text-effect-online-990.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'wall ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}break-wall-text-effect-871.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'wolf ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}create-wolf-logo-black-white-937.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'gwolf ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}create-wolf-logo-galaxy-online-936.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'cat ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}write-text-on-foggy-window-online-free-1015.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'dropwater ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}dropwater-text-effect-872.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'spooky ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}create-a-spooky-halloween-text-effect-online-1046.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'bsign ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}3d-business-sign-text-effect-1078.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'space ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await textpro(`${tp}create-space-3d-text-effect-online-985.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'paper ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await photooxy(`${px}logo-and-text-effects/write-text-on-burn-paper-388.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'metal ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await photooxy(`${px}other-design/create-dark-metal-text-with-special-logo-160.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'mwolf ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await photooxy(`${px}logo-and-text-effects/create-a-wolf-metal-text-effect-365.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'flaming ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await photooxy(`${px}logo-and-text-effects/realistic-flaming-text-effect-online-197.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'shadow ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await photooxy(`${px}logo-and-text-effects/shadow-text-effect-in-the-sky-394.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'coffee ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await photooxy(`${px}logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'wood ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await photooxy(`${px}logo-and-text-effects/carved-wood-effect-online-171.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});

command({
	pattern: 'fur ?(.*)',
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "textpro",
}, async (message, match) => {
match = match || message.reply_message.text;
if(!match) return await message.reply(R);
const {image} = await photooxy(`${px}logo-and-text-effects/fur-text-effect-generator-198.html`, [`${match.split(/[|]/)[0]}`, `${match.split(/[|]/)[1]}`]);
await message.sendFromUrl(image, {contextInfo: { externalAdReply: {
title: "𝐄𝐙𝐑𝐀-𝐗𝐃",
body: "",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/Ou56ggv.jpeg" }}, caption: (X)}, {quoted: message })
});


// All credits To Zeta-XD 👍🏿🥦
