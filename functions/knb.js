const Discord = require('discord.js');

module.exports.run = async(client,message,args) => {
	const filter = (reaction, user) => {
  		return reaction.emoji.name === 'unicode реакция'
	};

	const collector = message.createReactionCollector(filter, { max: 1 });


	collector.on('collect', (reaction, user) => {
	});

	collector.on('end', collected => {
	});

	const embed = new Discord.MessageEmbed()
	message.channel.send()
}

module.exports.help = {
	name: 'knb'
}