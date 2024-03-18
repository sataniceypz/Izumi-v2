const { command, getJson, isPrivate } = require('../lib')

command(
	{
		pattern: 'jean ?(.*)',
		fromMe: isPrivate,
		desc: 'simple google search',
		type: 'search',
	},
	async (message, match) => {
		if (!match)
			return await message.reply('*Example : jean 12 dollar in inr*')
		const { result } = await getJson(
			`https://levanter.onrender.com/jean?text=${match}`
		)
		if (!result) return await message.reply('_Not found_')
		return await message.sendMessage('```' + result + '```')
	}
);
