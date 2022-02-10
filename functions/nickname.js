const Discord = require('discord.js')
const mojang = require('mojang-api')
const fetch = require('node-fetch')

module.exports.run = async(client,message,args) => {
	let info = 'https://api.mojang.com/user/profile/agent/minecraft/name/' + args[1]
	let res = fetch(info)
		.then(res => res.json())
		.then(json => {
				const embed = new Discord.MessageEmbed()
			    .setColor('#2F3136')
			    .setTitle('Информация о игроке Minecraft по нику')
			    .addField('Никнейм', `${json.name}`)
			    .addField('UUID', `${json.id}`)
			    .setTimestamp()
			    .setAuthor(message.author.username, message.author.displayAvatarURL())
        		.setFooter(`${client.user.username}`, client.user.avatarURL())
				message.channel.send(embed);
			})
	if (args[1] === null) return;
}

module.exports.help = {
	name: 'nickname'
}