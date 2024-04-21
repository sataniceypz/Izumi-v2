const { command, isPrivate } = require("../lib/");
const R = "*_Example: gfx1 Zeta-XD|its's me|Ser_*";
const base = "https://upper-romy-inrl-bot.koyeb.app/api/gfx/";
let api = "zeta007";
const { CAPTION } = require("../config");
const X = require("../config");

command({
	pattern: "gfx1 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx1?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});
command({
	pattern: "gfx2 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx2?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});
command({
	pattern: "gfx3 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx3?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});
command({
	pattern: "gfx4 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx4?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});
command({
	pattern: "gfx5 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx5?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});
command({
	pattern: "gfx6 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx6?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});
command({
	pattern: "gfx7 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx7?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});
command({
	pattern: "gfx8 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx8?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});
command({
	pattern: "gfx9 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx9?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});

command({
	pattern: "gfx10 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx10?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});

command({
	pattern: "gfx11 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx11?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});

command({
	pattern: "gfx12 ?(.*)",
	fromMe: isPrivate,
    desc: "generate gfx logo",
    type: "gfx",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.reply(R);
let t1 = match.split(/[,|]/)[0]
let t2 = match.split(/[,|]/)[1]
let t3 = match.split(/[,|]/)[2]
let dd = `${base}gfx12?text=${t1}&text2=${t2}&text3=${t3}&apikey=${api}`
await message.sendFromUrl(dd, {caption: (X.CAPTION), quoted:message});
});

// credits to inr-l and Zeta-XD
