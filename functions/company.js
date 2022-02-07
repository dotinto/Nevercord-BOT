const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client,message,args) => {

	let res = fetch('https://random-data-api.com/api/company/random_company')
		.then(res => res.json())
		.then(json => {
			const embed = new Discord.MessageEmbed()
			.setTitle('Генератор фирм')
			.setThumbnail(json.logo)
			.addField('Наименование фирмы', `${json.business_name}`, true)
			.addField('Суффикс', `${json.suffix}`, true)
			.addField('Промышленность', `${json.industry}`, true)
			.addField('Крылатая фраза', `${json.catch_phrase}`, true)
			.addField('Модное слово', `${json.buzzword}`, true)
			.addField('Движение фирмы', `${json.bs_company_statement}`, true)
			.addField('Идентификационный номер сотрудника', `${json.employee_identification_number}`, true)
			.addField('D-U-N-S Номер', `${json.duns_number}`, true)
			.addField('Тип', `${json.type}`, true)
			.addField('Номер телефона', `${json.phone_number}`, true)
			.addField('Полный адрес', `${json.full_address}`, true)
			.addField('Широта', `${json.latitude}`, true)
			.addField('Долгота', `${json.longitude}`, true)
			.setColor('#2F3136')
			message.channel.send(embed);
		})
}
module.exports.help = {
	name: 'company'
}