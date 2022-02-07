const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
	let sms = args.join(" ").slice(3); 
	message.channel.bulkDelete(1); 
	message.channel.send('* **' + message.author.username + '** ' + sms); 
	console.log(`Пользователь ${message.author.username} отправил через me: ${args.join(" ")}`); 
}
module.exports.help = {
	name: 'me'
}