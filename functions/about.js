const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {	
	const embed = new Discord.MessageEmbed()
	.setTitle('О боте')
	.setColor('#2F3136')
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
	.addField('Разработчик', 'Intoshiro#5822\n**➥ [[Github]](https://github.com/Int0shiro)**', true)
	.addField('Пригласить на свой сервер', "[[тык]](https://int0shiro.github.io/redirect/nevercord)")
	.addField('Платформа', 'Node.JS', true)
	.addField('Язык программирования', 'JavaScript', true)
	.addField('Кол-во команд', "`44`", true)
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(embed)
}
module.exports.help = {
	name: 'about'
}