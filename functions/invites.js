const Discord = require('discord.js')
const guild = new Discord.Guild();

module.exports.run = async(client,message,args) => {
	var user = null;
        user = message.author;

        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                    for(var i=0; i < userInvites.length; i++)
                    {
                        var invite = userInvites[i];
                        userInviteCount += invite['uses'];
                    }
                        const embed = new Discord.MessageEmbed()
                        .setColor('#2F3136')
                        .setAuthor(message.author.username, message.author.displayAvatarURL())
                        .setTimestamp()
                        .setFooter(`${client.user.username}`, client.user.avatarURL())
                        .setTitle('Кол-во приглашений')
                        .setThumbnail(message.author.displayAvatarURL())
                        .setDescription('<@' + message.author.id + '>, Ваше кол-во приглашений на сервер **' + `${message.guild.name}` + '**:\n**' + `${userInviteCount}` + '**')
                        message.channel.send(embed)
            }
        )
}

module.exports.help = {
	name: 'invites', 
}