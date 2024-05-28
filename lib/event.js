const config = require('../config');
const commands = [];
const HANDLERS = config.HANDLERS || '';
const PREFIX = HANDLERS && !HANDLERS.startsWith('^') ? HANDLERS.replace(/[[\].]/g, '\\$&') : /\p{Emoji_Presentation}/gu.test(HANDLERS) ? '^[.]' : HANDLERS;
config.HANDLERS = PREFIX;

function command(info, func) {
	const types = ['image', 'text', 'video', 'sticker', 'audio'];

	const infos = {
		fromMe: info.fromMe ?? true,
		onlyGroup: info.onlyGroup ?? false,
		onlyPm: info.onlyPm ?? false,
		desc: info.desc ?? '',
		type: info.type ?? 'misc',
		dontAddCommandList: info.dontAddCommandList ?? false,
		function: func
	};

	if (!info.on && !info.pattern) {
		infos.on = 'message';
		infos.fromMe = false;
	} else {
		if (info.on) {
			infos.on = info.on;
			if (info.pattern) {
				infos.pattern = new RegExp((info.handler ?? true ? PREFIX : '') + info.pattern, info.flags ?? '');
			}
		} else {
			infos.pattern = new RegExp((PREFIX.startsWith('^') ? PREFIX : '^.+' + PREFIX) + '(' + info.pattern + '| ' + info.pattern + ')', 'is');
		}
	}

	commands.push(infos);
	return infos;
}

module.exports = {
	addCommand: command,
	command,
	commands,
	PREFIX: (config.HANDLERS ? config.HANDLERS.startsWith("^") ? config.HANDLERS.match(/\[(\W*)\]/)?.[1]?.[0] : config.HANDLERS.replace(/\[/g, "").replace(/\]/g, "") : "").trim() || config.HANDLERS,
	isPrivate: config.WORK_TYPE == 'public' ? false : true
}