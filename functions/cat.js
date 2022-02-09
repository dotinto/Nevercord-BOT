const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports.run = (client, message, args) => {

	let res = fetch('https://some-random-api.ml/animal/cat')
		.then(res => res.json())
		.then(json => {
			const translate = require('@vitalets/google-translate-api');

			translate(json.fact, {to: 'ru'}).then(res => {
				const embed = new Discord.MessageEmbed()
			    .setColor('#2F3136')
			    .setTitle(`${message.author.username}, котик :3`)
		    	.setDescription('<:flag_ru:889170215349407774> Интересный факт: ' + `${res.text}` + '\n\n<:flag_us:889170802635857973> Tip: ' + `${json.fact}`)
		    	.setImage(json.image)
		    	.setTimestamp()
        		.setFooter(`${client.user.username}`, client.user.avatarURL())
			message.channel.send(embed);
			})
	});
	
}

module.exports.help = {
    name: 'cat'
}