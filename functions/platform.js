const Discord = require('discord.js')
const platform = require('platform')

module.exports.run = async(client,message,args) => {
	const embed = new Discord.MessageEmbed()
	.setTimestamp()
	.setColor('#2F3136')
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	.setDescription(`${platform.name}` + '\n' + `${platform.version}` + '\n' + `${platform.product}` + '\n' + `Win32 64-bit` + '\n' + `Node.js 16.14.0 on Win32 64-bit`)
	message.channel.send(embed)
}
module.exports.help = {
	name: 'platform'
}
