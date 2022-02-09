const Discord = require('discord.js');
const guild = new Discord.Guild();

module.exports.run = async(client,message,args) => {
	let rname = message.mentions.roles.first().name;
	let rid = message.mentions.roles.first().id;
	let rpos = message.guild.roles.cache.get(rid).position;

	const embed = new Discord.MessageEmbed()
	.setTitle('Информация о роли ' + rname)
	.addField('Название', rname)
	.addField('ID', `||${rid}||`)
	.addField('Позиция', rpos)
	message.channel.send(embed)
}

module.exports.help = {
	name: 'roleinfo'
}