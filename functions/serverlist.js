module.exports.run = async (client,message,args) => {
	console.log(`-------------Server List by ${message.author.tag}-------------`);
	client.guilds.cache.forEach(guild => {
		console.log(` ${guild.name} --- ${guild.id}`);
	});
	console.log(`------------------Server List Ended-----------------`);
	message.channel.send('Список серверов отправлен в консоль')
}
module.exports.help = {
	name: 'serverlist'
}