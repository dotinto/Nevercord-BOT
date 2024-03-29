const Discord = require('discord.js')
const members = new Discord.GuildMember();
const fetch = require('node-fetch')

module.exports.run = async(client,message,args) => {
	let member = message.mentions.users.first() || message.author.username;
	let res = fetch('https://some-random-api.ml/animu/hug')
		.then(res => res.json())
		.then(json => {
				const embed = new Discord.MessageEmbed()
			    .setColor('#2F3136')
			    .setTitle(`${message.author.username} обнял ${member.username}`)
		    	.setImage(json.link)
		    	.setTimestamp()
		    	.setAuthor(message.author.tag, message.author.displayAvatarURL())
        		.setFooter(`${client.user.username}`, client.user.avatarURL())
			message.channel.send(embed);
			})
}

module.exports.help = {
	name: 'hug'
}