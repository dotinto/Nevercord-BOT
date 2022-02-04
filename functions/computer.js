const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {

	let res = fetch('https://random-data-api.com/api/computer/random_computer')
		.then(res => res.json())
		.then(json => {
			const embed = new Discord.MessageEmbed()
			.setTitle('Генератор свойств компьютера')
			.addField('Платформа', json.platform, true)
			.addField('Тип', json.type, true)
			.addField('ОС', json.os, true)
			.addField('Стак', json.stack, true)
			.setColor('#2F3136')
			message.channel.send(embed);
		})
}
module.exports.help = {
	name: 'computer'
}