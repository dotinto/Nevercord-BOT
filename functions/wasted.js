const Discord = module.require("discord.js");
const fetch = require('node-fetch')
const fs = require("fs");

module.exports.run = async (client,message,args) => {

	if (!message.mentions.users.size) { 
		let link = `https://some-random-api.ml/canvas/wasted/?avatar=${message.author.avatarURL({ format: 'png'})}` 
		const attachmentt = new Discord.MessageAttachment(link, 'triggered.gif');
		const embed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username} ПОТРАЧЕНО!`)
		    .attachFiles(attachmentt)
		    .setImage('attachment://triggered.gif')
		    .setColor('#2F3136')
		    .setTimestamp()
		    .setAuthor(message.author.tag, message.author.displayAvatarURL())
        	.setFooter(`${client.user.username}`, client.user.avatarURL())
		return message.channel.send(embed);
	}
	const WastedList = message.mentions.users.map(user => {
		let link = `https://some-random-api.ml/canvas/wasted/?avatar=${user.avatarURL({ format: 'png'})}`
		const attachmentt = new Discord.MessageAttachment(link, 'triggered.gif');
		const embed = new Discord.MessageEmbed()
		    .setTitle(`${user.username}: Потрачено!`)
		    .attachFiles(attachmentt)
		    .setImage('attachment://triggered.gif')
		    .setColor('#2F3136')
		    .setAuthor(message.author.tag, message.author.displayAvatarURL())
		    .setTimestamp()
        	.setFooter(`${client.user.username}`, client.user.avatarURL())

		return embed
	});
	message.channel.send(WastedList);
	return
};
module.exports.help = {
    name: "wasted"
};