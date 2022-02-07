const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {	
	const embed = new Discord.MessageEmbed()
	.setTitle('О боте')
	.setColor('#2F3136')
	.addField('Разработчик', 'Intoshiro#5822\n**➥ [[Github]](https://github.com/1ntosh1ro)**', true)
	.addField('Страна создания', '<:flag_ua:910255758321524756> Украина / Україна / Ukraine', true)
	.addField('Язык программирования', 'JavaScript', true)
	.addField('Кол-во команд', '35', true)
	.addField('npm-Dependencies', '[@discordjs/rest:0.1.0-canary.0](https://www.npmjs.com/package/@discordjs/rest)\n[@vitalets/google-translate-api:^7.0.0](https://www.npmjs.com/package/@vitalets/google-translate-api)\n[child_process:^1.0.2](https://www.npmjs.com/package/child_process)\n[discord-api-types:^0.23.1](https://www.npmjs.com/package/discord-api-types)\n[discord.js:^12.5.3](https://www.npmjs.com/package/discord.js)\n[discord.js-commando:^0.12.3](https://www.npmjs.com/package/discord.js-commando)\n[fs:0.0.1-security](https://www.npmjs.com/package/fs)\n[https:^1.0.0](https://www.npmjs.com/package/https)\n[mojang-api:0.0.2](https://www.npmjs.com/package/mojang-api)\n[moment:^2.29.1](https://www.npmjs.com/package/moment)\n[node-fetch:^2.6.2](https://www.npmjs.com/package/node-fetch)\n[nodejs-currency-converter:^1.0.2](https://www.npmjs.com/package/nodejs-currency-converter)', true)
	message.channel.send(embed)
}
module.exports.help = {
	name: 'about'
}