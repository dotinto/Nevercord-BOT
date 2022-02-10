module.exports.run = async(client,message,args) => {
	const Discord = require('discord.js')
	const members = new Discord.GuildMember();
	let member = message.mentions.users.first().username || message.author.username;
	let template = [
		"https://media1.giphy.com/media/JoyVW5PNALEyCf9tkc/giphy-downsized-large.gif",
		"https://i.gifer.com/MbUZ.gif",
		"https://c.tenor.com/xcWNRC6HDcIAAAAC/gun-gun-shot.gif",
		"https://i.pinimg.com/originals/d3/21/38/d32138271423a8ac571885521e8c3dbc.gifhttps://media0.giphy.com/media/l1J3Tqz2fpsx60MDe/200.gif",
		"https://media0.giphy.com/media/l1J3Tqz2fpsx60MDe/200.gif"
	];
	let template1 = Math.floor(Math.random() * template.length);
	let template2 = template[template1]
	const embed = new Discord.MessageEmbed()
	.setTitle(`${message.author.username} убил ${member}`)
	.setImage(template2)
	.setColor('#2F3136')
	.setTimestamp()
	.setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(embed)
}

module.exports.help = {
	name: 'kill'
}