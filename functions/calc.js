const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	let num1 = args[1]
	let num2 = args[3]

	if (args[2] === `+`) {
		let plus1 = parseInt(num1)
		let plus2 = parseInt(num2)
		let plus = plus1 + plus2
		const embed = new Discord.MessageEmbed()
		.setDescription('Результат добавления: ' + plus)
		message.channel.send(embed)
	}
	if (args[2] === `-`) {
		let minus1 = parseInt(num1)
		let minus2 = parseInt(num2)
		let minus = minus1 - minus2
		const embed = new Discord.MessageEmbed()
		.setDescription('Результат вычитания: ' + minus)
		message.channel.send(embed)
	}
	if (args[2] === `*`) {
		let multiplication1 = parseInt(num1)
		let multiplication2 = parseInt(num2)
		let multiplication = multiplication1 * multiplication2
		const embed = new Discord.MessageEmbed()
		.setDescription('Результат умножения: ' + multiplication)
		message.channel.send(embed)
	}
	if (args[2] === `/`) {
		let division1 = parseInt(num1)
		let division2 = parseInt(num2)
		let division = division1 / division2
		const embed = new Discord.MessageEmbed()
		.setDescription('Результат деления: ' + division)
		message.channel.send(embed)
	}
	if (args[2] === ':') {
		message.reply('Оператор деления - /')
	}

}

module.exports.help = {
	name: 'calc'
}