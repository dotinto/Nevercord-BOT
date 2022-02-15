const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	let arg = args[1];
	let Response = 'https://http.cat/' + arg;
	const embed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
    .setImage(Response)
    message.channel.send(embed)
}

module.exports.help = {
	name: 'http.cat'
}