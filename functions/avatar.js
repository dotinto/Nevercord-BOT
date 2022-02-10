const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	const Member = message.mentions.users.first() || message.author;
	const embed = new Discord.MessageEmbed()
	.setTitle(`Аватар ${Member.username}`)
	.setAuthor(message.author.username, message.author.displayAvatarURL())
	.setImage(Member.displayAvatarURL() + '?size=1536')
	.setColor('#2F3136')
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(embed)
}

module.exports.help = {
	name: 'avatar'
}