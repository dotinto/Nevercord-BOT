const Discord = require('discord.js')
const mojang = require('mojang-api')
const fetch = require('node-fetch')

module.exports.run = async(client,message,args) => {
	let input = 'https://api.mojang.com/user/profile/agent/minecraft/name/' + args[1]
	let res = fetch(input)
		.then(res => res.json())
		.then(json => {
				const embed = new Discord.MessageEmbed()
			    .setColor('#2F3136')
			    .setTitle('Информация о игроке Minecraft по нику')
			    .addField('Никнейм', `${json.name}`)
			    .addField('UUID', `${json.id}`)
				
				message.channel.send(embed);
			})
	if (args[1] === null) return;
}

module.exports.help = {
	name: 'nickname'
}