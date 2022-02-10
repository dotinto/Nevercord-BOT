let randstring = ["🌑","🧻","✂️"];

module.exports.run = async (bot,message,args) => {
    const filter = m => (m.content == '🌑' || m.content =='✂️' || m.content == '🧻');
    await message.channel.send('Welcome to Rock paper scissors, please copy and paste form which you choose in 30 sec ✂️ 🧻 🌑').then(() => {
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
    if(first == second){return str = '> ' + first + '\n' + 'I choosed ' + first +', Draw'; }
    else if(first == randstring[0] && second == randstring[1]){return str = '> ' + first + '\n' + 'I choosed ' + second + ' You Lose'; }
    else if(first == randstring[1] && second == randstring[2]){return str = '> ' + first + '\n' + 'I choosed ' + second + ' You Lose'; }
    else if(first == randstring[2] && second == randstring[0]){return str = '> ' + first + '\n' + 'I choosed ' + second + ' You Lose'; }
    else if(first == randstring[2] && second == randstring[1]){return str = '> ' + first + '\n' + 'I choosed ' + second + ' You Won'; }
    else if(first == randstring[1] && second == randstring[0]){return str = '> ' + first + '\n' + 'I choosed ' + second + ' You Won'; }
    else if(first == randstring[0] && second == randstring[2]){return str = '> ' + first + '\n' + 'I choosed ' + second + ' You Won'; }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.help = {
	name: 'knb'
}