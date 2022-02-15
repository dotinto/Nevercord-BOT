const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	let toeval = args.join(" ").slice(5);
	let tofloat = parseFloat(eval(toeval));
	let res = Math.floor(tofloat);
	const embed = new Discord.MessageEmbed()
	.setColor('#2F3136')
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
	.setDescription(`${toeval} = ${res}`)
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(embed)
}

module.exports.help = {
	name: 'calc'
}