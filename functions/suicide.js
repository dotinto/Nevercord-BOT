module.exports.run = async(client,message,args) => {
	const Discord = require('discord.js')

	let template = [

	]
	let template1 = Math.floor(Math.random() * template.length);
	let template2 = template[template1]
	const embed = new Discord.MessageEmbed()
	.setTitle(`${message.author.username} самоубился`)
	.setImage(template2)
	.setColor('#2F3136')
	message.channel.send(embed)
}

module.exports.help = {
	name: 'suicide'
}