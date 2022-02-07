const Discord = require('discord.js')

module.exports.run = async(client,message,args) => {
    const members = message.guild.memberCount

    const translate = require('@vitalets/google-translate-api');

    translate(message.guild.region, {to: 'ru'}).then(res => { 
        let region = res.text;
        const embed = new Discord.MessageEmbed()
        .addField('Название сервера', `${message.guild.name}`, true)
        .addField('Владелец сервера', `${message.guild.owner}(${message.guild.ownerID})`, true)
        .addField('Сервер создан', `${message.guild.createdAt.toLocaleString()}`, true)
        .addField('Колличество участников', `${members}`, true)
        .addField('Регион', `${region}`, true)
        .addField('AFK Время', `${message.guild.afkTimeout / 60} минут`, true)
        .addField('AFK Канал', `${message.guild.afkChannelID === null ? 'Нет AFK канала' : client.channels.cache.get(message.guild.afkChannelID).name}`, true)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.avatarURL())
        .setColor('#2F3136')
        .setThumbnail(message.guild.iconURL())
        message.channel.send(embed)
    });
}

module.exports.help = {
    name: 'serverinfo'
}