const Discord = require('discord.js')
const translate = require('@vitalets/google-translate-api');

module.exports.run = async(client,message,args) => {
	let join = args.join().slice(10)
	
	translate(join, {to: 'ru'}).then(res => {
    	const embed = new Discord.MessageEmbed()
    	.setDescription(`${join}`)
    	.setTimestamp()
        .setFooter(`${client.user.username}`, client.user.avatarURL())
    	message.channel.send(embed)
	})
}

module.exports.help = {
	name: 'translate'
}