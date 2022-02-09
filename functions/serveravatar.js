const Discord = require('discord.js');
const guild = new Discord.Guild();

module.exports.run = async(client,message,args) => {
	const embed = new Discord.MessageEmbed()
	.setTitle(`Аватар сервера ${message.guild.name}`)
	.setImage(message.guild.iconURL() + '?size=1024')
	.setColor('#2F3136')
	message.channel.send(embed)
}

module.exports.help = {
	name: 'serveravatar'
}