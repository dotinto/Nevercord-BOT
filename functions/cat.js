const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports.run = (client, message, args) => {

	let res = fetch('https://some-random-api.ml/animal/cat')
		.then(res => res.json())
		.then(json => {
				const embed = new Discord.MessageEmbed()
			    .setColor('#2F3136')
			    .setTitle(`${message.author.username}, котик :3`)
		    	.setImage(json.image)
		    	.setTimestamp()
		    	.setAuthor(message.author.tag, message.author.displayAvatarURL())
        		.setFooter(`${client.user.username}`, client.user.avatarURL())
			message.channel.send(embed);
	});
	
}

module.exports.help = {
    name: 'cat'
}