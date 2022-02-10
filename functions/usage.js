const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
	const embed = new Discord.MessageEmbed()
	.setTitle('Навигационное меню использования')
	.setColor('#2F3136')
	.setTimestamp()
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	.addField('Источники информации', '**>platform**\n**>about**\n**>userinfo **`@пользователь`\n**>serverinfo**\n**>roleinfo **`@роль`\n**>usage**')
	.addField('RP команды', '**>kill** `@пользователь`\n**>wasted** `@пользователь`\n**>suicide** `@пользователь`\n**>hug** `@пользователь`\n**>pat **`@пользователь`\n**>wink **`@пользователь`\n**>me**')
	.addField('Утилиты', '**>avatar** `@пользователь`\n**>servericon**\n**>say **`<сообщение>`')
	.addField('Животные', '**>bird**\n**>cat**\n**>dog**\n**>fox**\n**>kangaroo**\n**>koala**\n**>panda**\n**>raccoon**\n**>redpanda**')
	.addField('Генераторы', '**>coin**')
	.addField('Minecraft команды', '**>nickname** `<игровой ник>`\n**>uuid** `<32 значный id>`')
	message.channel.send(embed)
}

module.exports.help = {
	name: 'usage'
}