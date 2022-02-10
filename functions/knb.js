const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
	const variables = [
	"<:scissors:941322185170092082> Ножницы",
	"<:page_with_curl:941322433636483143> Бумага",
	"<:rock:941322605221261393> Камень"
	]
	const random = Math.floor(Math.random() * variables.length)
	const botanswer = variables[random]

	if (args[1] === 'Ножницы' && botanswer === "<:rock:941322605221261393> Камень") {
		const embed = new Discord.MessageEmbed()
		.setTitle('Цу-е-фа!')
		.addField('Ваш вариант:', args[1])
		.addField('Вариант бота:', botanswer)
		.addField('Итог', `Выиграл: <@${client.user.id}>`)
		message.channel.send()
	}
	else if (args[1] == 'Ножницы' && botanswer === "<:scissors:941322185170092082> Ножницы") {
		const embed = new Discord.MessageEmbed()
		.setTitle('Цу-е-фа!')
		.addField('Ваш вариант:', args[1])
		.addField('Вариант бота:', botanswer)
		.addField('Итог', `Ничья, никто не выиграл`)
		message.channel.send()
	}
	else if (args[1] == 'Ножницы' && botanswer === "<:page_with_curl:941322433636483143> Бумага") {
		const embed = new Discord.MessageEmbed()
		.setTitle('Цу-е-фа!')
		.addField('Ваш вариант:', args[1])
		.addField('Вариант бота:', botanswer)
		.addField('Итог', `Выиграл: <@${message.author.id}>`)
		message.channel.send()
	}
}

module.exports.help = {
	name: 'knb'
}