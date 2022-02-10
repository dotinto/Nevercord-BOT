const Discord = require('discord.js')
const mojang = require('mojang-api')
const fetch = require('node-fetch')

module.exports.run = async(client,message,args) => {
	let input = 'https://sessionserver.mojang.com/session/minecraft/profile/' + args[1]
	let res = fetch(input)
		.then(res => res.json())
		.then(json => {
				const embed = new Discord.MessageEmbed()
			    .setColor('#2F3136')
			    .setAuthor(message.author.tag, message.author.displayAvatarURL())
			    .setTitle('Информация о игроке Minecraft по UUID')
			    .addField('Никнейм', `${json.name}`)
			    .addField('UUID', `${json.id}`)	
			    .setTimestamp()
        		.setFooter(`${client.user.username}`, client.user.avatarURL())		
				message.channel.send(embed);
			})
	if (args[1] === null) return;
}
module.exports.help = {
	name: 'uuid'
}