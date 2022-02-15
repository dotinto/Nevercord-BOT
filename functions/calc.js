const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	let toint = args.join(" ").slice(5);
	let res = Math.floor(toint);
	const embed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
	.setDescription(`${toint} = ${res}`)
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(embed)
}

module.exports.help = {
	name: 'calc'
}