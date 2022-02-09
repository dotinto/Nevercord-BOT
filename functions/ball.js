module.exports.run = async(client,message,args) => {
	const Discord = require('discord.js')
	let letters = [
	"Нет",
	"Да",
	"Нужно подумать над этим вопросом, займитесь этим"
	]
	let index = Math.floor(Math.random() * letters.length)
	let result = letters[index]
	let res = args.join(" ");
	let join = res.slice(6)
	const embed = new Discord.MessageEmbed()
	.setTitle('Магический шар')
	.setDescription(`${result}`)
	.setFooter(`${join}`)
	.setColor('#2F3136')
	.setTimestamp()
	message.channel.send(embed)
}

module.exports.help = {
	name: '8ball'
}