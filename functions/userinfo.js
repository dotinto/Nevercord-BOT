const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client,message,args) => {

	const Target = message.mentions.users.first() || message.author;
	const Member = message.guild.members.cache.get(Target.id);

	let mja = moment(Member.joinedAt).startOf('day').fromNow();
	let tca = moment(Target.createdAt).startOf('day').fromNow();

	let mjaf = moment(Member.joinedAt).format(`MMM Do YYYY, h:mm:ss `)
	let tcaf = moment(Target.createdAt).format(`MMM Do YYYY, h:mm:ss `)

	const Response = new Discord.MessageEmbed()
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
	.setThumbnail(Target.displayAvatarURL())
	.setColor('#2F3136')
	.setTitle('Персональная карточка ' + `${Target.username}`)
	.addField('Ник', `${Target.username}`, true)
	.addField('Дискриминатор', `${Target.discriminator}`, true)
	.addField('Идентификатор', `|| ${Target.id} ||`, true)
	.addField('Бот?', `${Target.bot}`, true)
	.addField('Аватар', `[[клик]](${Target.displayAvatarURL()})`, true)
	.addField("Как участник", `${mjaf}\n**-** ${mja}`, true)
	.addField("Как пользователь", `${tcaf}\n**-** ${tca}`, true)
	.addField('Роли', `${Member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`, true)
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	message.channel.send(Response)
}

module.exports.help = {
	name: 'userinfo'
}