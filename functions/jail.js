const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {

	let Target = message.members.mentions.first() || message.author

	let link = `https://some-random-api.ml/canvas/jail?avatar=${Target.displayAvatarURL()}`
	const attachment = new Discord.MessageAttachment(link, 'jail.gif');
  	const embed = new Discord.MessageEmbed()
    .setTitle(`<@${Target.id}> был посажен`)
	.setColor('#2F3136')
	.setTimestamp()
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`${client.user.username}`, client.user.avatarURL())    
    .attachFiles(attachment)
    .setImage('attachment://jail.gif')
  	message.channel.send(embed)
}

module.exports.help = {
	name: 'jail'
}