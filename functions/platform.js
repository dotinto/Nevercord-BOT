const Discord = require('discord.js')
const platform = require('platform')

module.exports.run = async(client,message,args) => {
	const embed = new Discord.MessageEmbed()
	.setTimestamp()
	.setColor('#2F3136')
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	.setDescription(`${platform.name}` + '\n' + `${platform.version}` + '\n' + `${platform.product}` + '\n' + `${platform.os}` + '\n' + `${platform.description}`)
	message.channel.send(embed)
}
module.exports.help = {
	name: 'platform'
}
