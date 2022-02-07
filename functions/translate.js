const Discord = require('discord.js')
const translate = require('@vitalets/google-translate-api');

module.exports.run = async(client,message,args) => {
	let join = args.join().slice(10)
	
	translate(join, {to: 'ru'}).then(res => {
    	const embed = new Discord.MessageEmbed()
    	.setDescription(`${join}`)
    	.setFooter('Переведено на Русский')
	})
}

module.exports.help = {
	name: 'translate'
}