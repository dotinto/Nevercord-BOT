const Discord = require('discord.js')
let randstring = ["🌑","🧻","✂️"];

module.exports.run = async (client,message,args) => {
	const welcome = new Discord.MessageEmbed()
	.setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())
	.setTitle("Камень, ножницы, бумага")
	.setColor('#2F3136')
	.setAuthor(message.author.tag, message.author.displayAvatarURL())
	.setDescription("Твоя задача написать любой из этих эмодзи: 🌑,🧻,✂. А бот сгенерирует рандомную из них. У тебя есть 30 секунд, что бы выбрать!");

    const filter = m => (m.content == '🌑' || m.content =='✂️' || m.content == '🧻');
    await message.channel.send(welcome).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(getWin(collected.first().content,randstring[getRandomInt(3)]));
            })
            .catch(collected => {
                message.channel.send('Time ran out');
            });
        });
}

function getWin(first, second)
{
    let str = "";
    if(first == second){return str = '> ' + first + '\n' + 'Бот выбрал ' + first +', **Ничья :|**'; }
    else if(first == randstring[0] && second == randstring[1]){return str = '> ' + first + '\n' + 'Бот выбрал ' + second + ', **Вы проиграли :(**'; }
    else if(first == randstring[1] && second == randstring[2]){return str = '> ' + first + '\n' + 'Бот выбрал ' + second + ', **Вы проиграли :(**'; }
    else if(first == randstring[2] && second == randstring[0]){return str = '> ' + first + '\n' + 'Бот выбрал ' + second + ', **Вы проиграли :(**'; }
    else if(first == randstring[2] && second == randstring[1]){return str = '> ' + first + '\n' + 'Бот выбрал ' + second + ', **Вы выиграли :)**'; }
    else if(first == randstring[1] && second == randstring[0]){return str = '> ' + first + '\n' + 'Бот выбрал ' + second + ', **Вы выиграли :)**'; }
    else if(first == randstring[0] && second == randstring[2]){return str = '> ' + first + '\n' + 'Бот выбрал ' + second + ', **Вы выиграли :)**'; }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.help = {
	name: 'knb'
}