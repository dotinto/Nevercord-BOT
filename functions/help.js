const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Навигационное меню помощи')
	.setColor('#2F3136')
	.addField('Источники информации', '**>platform** - платформа бота\n**>about** - о боте\n**>userinfo** - информация о пользователе\n**>serverinfo** - информация о сервере', true)
	.addField('RP команды', '**>kill** - убить\n**>wasted** - "*потрачено*"\n**>suicide** - самоубийство\n**>hug** - обнять\n**>pat** - погладить\n**>wink** - подмигнуть\n**>me** - действие', true)
	.addField('Утилиты', '**>avatar** - узнать аватар пользователя\n**>say** - сказать от имени бота', true)
	.addField('Животные', '**>bird**\n**>cat**\n**>dog**\n**>fox**\n**>kangaroo**\n**>koala**\n**>panda**\n**>raccoon**\n**>redpanda**', true)
	.addField('Генераторы', '**>coin** - подкинуть монетку', true)
	.addField('Minecraft команды', '**>nickname** - информация по нику\n**>uuid** - информация по ID')
	message.channel.send(embed)
}

module.exports.help = {
	name: 'help'
}