const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {

	let res = fetch('https://random-data-api.com/api/crypto_coin/random_crypto_coin')
		.then(res => res.json())
		.then(json => {
			const embed = new Discord.MessageEmbed()
			.setTitle('Генератор крипто-монеты')
			.setThumbnail(json.logo)
			.setDescription('Вам выпало:')
			.addField('Название', `${json.coin_name}`, true)
			.addField('Акроним', `${json.acronym}`, true)
			.setColor('#2F3136')
			.setTimestamp()
        	.setFooter(`${client.user.username}`, client.user.avatarURL())
			message.channel.send(embed);
		})
}
module.exports.help = {
	name: 'crypto'
}