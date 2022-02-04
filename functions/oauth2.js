const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	const embed = Discord.MessageEmbed()
	.setDescription('Воспользуйтесь этой ссылкой для приглашения на сервер бота с разрешением на слэш-команды\nhttps://discord.com/api/oauth2/authorize?client_id=900347832953884762&permissions=545460846583&scope=bot')
	message.channel.send(embed)
}
module.exports.help = {
	name: 'oauth2'
}