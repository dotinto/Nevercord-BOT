const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	const Member = message.mentions.users.first() || message.author;
	const embed = new Discord.MessageEmbed()
	.setTitle(`Аватар ${Member.username}`)
	.setImage(Member.displayAvatarURL())
	.setColor('#2F3136')
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(embed)
}

module.exports.help = {
	name: 'avatar'
}