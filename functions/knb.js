let randstring = ["🌑","🧻","✂️"];
const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {
	const welcome = new Discord.MessageEmbed()
	.setTitle("Камень, ножницы, бумага")
	.setDescription("Твоя задача написать любой из этих эмодзи: 🌑,🧻,✂. А бот сгенерирует рандомную из них. У тебя есть 30 секунд, что бы выбрать!");

    const filter = m => (m.content == '🌑' || m.content =='✂️' || m.content == '🧻');
    await message.channel.send(welcome).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(getWin(collected.first().content,randstring[getRandomInt(3)]));
            })
            .catch(collected => {
                message.channel.send('Время вышло ¯\\_(ツ)_/¯');
            });
        });
}

function getWin(first, second)
{
	// const losing = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Проигрыш :(**  Подробности:').addField('Вы:', first).addField('Бот:', second)

	// const winning = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Выигрыш :)**  Подробности:').addField('Вы:', first).addField('Бот:', second)

	// const draw = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Ничья :|**  Подробности:').addField('Вы:', firs.addField('Бот:', second)

    let str = "";
    if(first == second){return str = {let draw = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Ничья :|**  Подробности:').addField('Вы:', first).addField('Бот:', second)}; }
    else if(first == randstring[0] && second == randstring[1]){return str = {let winning = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Выигрыш :)**  Подробности:').addField('Вы:', first).addField('Бот:', second}); }
    else if(first == randstring[1] && second == randstring[2]){return str = {let winning = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Выигрыш :)**  Подробности:').addField('Вы:', first).addField('Бот:', second}); }
    else if(first == randstring[2] && second == randstring[0]){return str = {let winning = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Выигрыш :)**  Подробности:').addField('Вы:', first).addField('Бот:', second}); }
    else if(first == randstring[2] && second == randstring[1]){return str = {let losing = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Проигрыш :(**  Подробности:').addField('Вы:', first).addField('Бот:', second})'; }
    else if(first == randstring[1] && second == randstring[0]){return str = {let losing = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Проигрыш :(**  Подробности:').addField('Вы:', first).addField('Бот:', second})'; }
    else if(first == randstring[0] && second == randstring[2]){return str = {let losing = new Discord.MessageEmbed().setTitle("Камень, ножницы, бумага").setDescription('**Проигрыш :(**  Подробности:').addField('Вы:', first).addField('Бот:', second})'; }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.help = {
	name: 'knb'
}