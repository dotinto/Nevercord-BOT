const Discord = require('discord.js')
const platform = require('platform')

module.exports.run = async(client,message,args) => {
	const embed = new Discord.MessageEmbed()
	.setDescription(`${platform.name}` + '\n' + `${platform.version}` + '\n' + `${platform.product}` + '\n' + `${platform.os}` + '\n' + `${platform.description}`)
	message.channel.send(embed)
}
module.exports.help = {
	name: 'platform'
}
