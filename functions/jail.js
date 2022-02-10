const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {

	const Target = message.mentions.users.first() || message.author;

	let link = `https://some-random-api.ml/canvas/jail?avatar=${Target.displayAvatarURL()}`
	const attachment = new Discord.MessageAttachment(link, 'jail.png');
  	const embed = new Discord.MessageEmbed()
    .setTitle(`<@${Target.tag}> был посажен`)
	.setColor('#2F3136')
	.setTimestamp()
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`${client.user.username}`, client.user.avatarURL())    
    .attachFiles(attachment)
    .setImage('attachment://jail.png')
  	message.channel.send(embed)
}

module.exports.help = {
	name: 'jail'
}