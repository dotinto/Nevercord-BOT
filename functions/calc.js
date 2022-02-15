const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	let in = args.join(" ").slice(5);
	let ex = parseInt(in);
	let res = Math.floor(ex);
	const embed = new Discord.MessageEmbed()
	message.channel.send(embed)
}

module.exports.help = {
	name: 'calc'
}