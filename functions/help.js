const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Навигационное меню помощи')
	.setColor('#2F3136')
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	.addField('Информация', '`>platform` `>about` `>userinfo` `>serverinfo` `>roleinfo` `>usage`')
	.addField('RолеПлей', '`>kill` `>wasted` `>suicide` `>hug` `>pat` `>wink` `>me` `>jail` `>try`')
	.addField('Утилиты', '`>avatar` `>servericon` `>say`')
	.addField('Животные', '`>http.cat` `>bird` `>cat` `>dog` `>fox` `>kangaroo` `>koala` `>panda` `>raccoon` `>redpanda`')
	.addField('Игры', '`>coin` `>knb` `>8ball`')
	.addField('Minecraft', '`>nickname` `>uuid`')
	message.channel.send(embed)
}

module.exports.help = {
	name: 'help'
}