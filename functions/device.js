const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {

	let res = fetch('https://random-data-api.com/api/device/random_device')
		.then(res => res.json())
		.then(json => {
			const embed = new Discord.MessageEmbed()
			.setTitle('Генератор устройства')
			.setThumbnail(json.logo)
			.setDescription('Вам выпало:')
			.addField('Сборка', `${json.build_number}`, true)
			.addField('Производитель', `${json.manufacturer}`, true)
			.addField('Модель', `${json.model}`, true)
			.addField('OS / Платформа', `${json.platform}`, true)
			.addField('Серийный номер', `${json.serial_number}`, true)
			.addField('Версия', `${json.version}`, true)
			.setColor('#2F3136')
			.setTimestamp()
        	.setFooter(`${client.user.username}`, client.user.avatarURL())
			message.channel.send(embed);
		})
}
module.exports.help = {
	name: 'device'
}