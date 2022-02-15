const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports.run = (client, message, args) => {

	let res = fetch('https://some-random-api.ml/animal/panda')
		.then(res => res.json())
		.then(json => {
				const embed = new Discord.MessageEmbed()
			    .setColor('#2F3136')
			    .setAuthor(message.author.tag, message.author.displayAvatarURL())
			    .setTitle(`${message.author.username}, пандочка :3`)
		    	.setImage(json.image)
		    	.setTimestamp()
        		.setFooter(`${client.user.username}`, client.user.avatarURL())
			message.channel.send(embed);
	});
	
}

module.exports.help = {
    name: 'panda'
}