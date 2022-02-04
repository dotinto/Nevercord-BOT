const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
	let sms = args.join(" ").slice(4); 
	message.channel.bulkDelete(1); 
	message.channel.send(sms); 
	console.log(`Пользователь ${message.author.username} отправил через say: ${args.join(" ")}`); 
};
module.exports.help = {
    name: "say"
};