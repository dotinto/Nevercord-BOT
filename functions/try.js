const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
	let join = args.join(" ").slice(4)
	let patterns = [
	"Удачно",
	"Неудачно"
	]
	let randomiser = Math.floor(Math.random() * patterns.length)
	let res = patterns[randomiser]
	message.channel.bulkDelete(1);
	message.channel.send('* **' + message.author.username + '** ' + sms + ` ${res}`);
}

module.exports.help = {
	name: 'try'
}