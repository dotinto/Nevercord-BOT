const Discord = require('discord.js');
const guild = new Discord.Guild();

module.exports.run = async(client,message,args) => {
	const embed = new Discord.MessageEmbed()
	.setTitle(`Аватар сервера ${message.guild.name}`)
	.setImage(message.guild.iconURL() + '?size=1536')
	.setColor('#2F3136')
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(embed)
}

module.exports.help = {
	name: 'serveravatar'
}