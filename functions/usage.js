const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Навигационное меню помощи')
	.setColor('#2F3136')
	.setTimestamp()
	.setDescription('Если вы не нашли нужную команду - вероятнее всего она не нужнаеться в дополнительных параметрах')
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	.addField('>userinfo', '`>userinfo <@пользователь>`')
	.addField('>roleinfo', '`>roleinfo <@роль>`')
	.addField('>kill', '`>kill <@пользователь>`')
	.addField('>wasted', '`>wasted <@пользователь>`')
	.addField('>hug', '`>hug <@пользователь>`')
	.addField('>pat', '`>pat <@пользователь>`')
	.addField('>wink', '`>wink <@пользователь>`')
	.addField('>me', '`>me <сообщение>`')
	.addField('>avatar', '`>avatar <@пользователь>`')
	.addField('>say', '`>say <сообщение>`')
	.addField('>8ball', '`>8ball <вопрос>`')
	.addField('>uuid', '`>uuid <id игрока>`')
	.addField('>nickname', '`>nickname <ник игрока>`')
	.addField('>jail', '`>jail <@пользователь>`')
	.addField('>try', '`>try <сообщение>`')
	.addField('>http.cat', '`>http.cat <код ответа>`')
	message.channel.send(embed)
}

module.exports.help = {
	name: 'usage'
}