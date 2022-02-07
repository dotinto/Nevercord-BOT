const Discord = require('discord.js')
const mojang = require('mojang-api')
const fetch = require('node-fetch')

module.exports.run = async(client,message,args) => {
	let input = 'https://sessionserver.mojang.com/session/minecraft/profile/' + args.join(" ").slice(5)
	let res = fetch(input)
		.then(res => res.json())
		.then(json => {
				const embed = new Discord.MessageEmbed()
			    .setColor('#2F3136')
			    .setTitle('Информация о игроке Minecraft по UUID')
			    .addField('Никнейм', `${json.name}`)
		    	.setImage(json.textures.SKIN.url)
				
				message.channel.send(embed);
			})
	let in = args.join(" ").slice(5);
	if (in === null) {
		message.reply('Укажите UUID')
	}
}
module.exports.help = {
	name: 'uuid'
}