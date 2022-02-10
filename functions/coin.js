const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	const coinValues = [
		"Решка!",
		"Орёл!",
		"Решка!",
		"Орёл!",
		"Решка!",
		"Орёл!",
		"Решка!",
		"Орёл!",
		"РЕБРО!!!"
	]
	const coinIndex = Math.floor(Math.random() * coinValues.length)
	const coinRes = coinValues[coinIndex]
	const embed = new Discord.MessageEmbed()
	.setDescription(`<:coin:892770395030159410> ` + `${coinRes}`)
	.setColor('#2F3136')
	.setAuthor(message.author.username, message.author.displayAvatarURL())
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(embed)
}

module.exports.help = {
	name: 'coin'
}