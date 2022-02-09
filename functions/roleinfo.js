const Discord = require('discord.js');
const guild = new Discord.Guild();
const Role = new Discord.Role();
const hexToRgb = require('hex-to-rgb');

module.exports.run = async(client,message,args) => {
	let rname = message.mentions.roles.first().name;
	let rid = message.mentions.roles.first().id;
	let rpos = message.guild.roles.cache.get(rid).position;
	let rmemb = message.guild.roles.cache.get(rid).members.size;
	let rhex = message.mentions.roles.first().hexColor;

	const embed = new Discord.MessageEmbed()
	.setTitle('Информация о роли ' + rname)
	.addField('Название', rname, true)
	.addField('ID', `||${rid}||`, true)
	.addField('Позиция', rpos, true)
	.addField('Кол-во участников с этой ролью', rmemb, true)
	.addField('Коды цвета', `HEX: ${rhex}\nRGB: ${hexToRgb(rhex)}`, true)
	.setTimestamp()
	.setColor('#2F3136')
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(embed)

	if (args[1] === null) return;
}

module.exports.help = {
	name: 'roleinfo'
}