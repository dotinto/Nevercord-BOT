const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix, djsv, commands } = require('./config.json');
const { version, author } = require('./package.json')
const fetch = require('node-fetch')
const fs = require('fs')

client.functions = new Discord.Collection()

fs.readdir('./functions', (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js') 
    if (jsfile.length <= 0) return console.log('Команды не найдены!') 

    console.log(`Загружено ${jsfile.length} команд`)
    jsfile.forEach((f, i) => {
        let props = require(`./functions/${f}`)
        client.functions.set(props.help.name, props)
    })
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let messageArray = message.content.split(' ') 
    let command = messageArray[0]
    const args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase();

    let command_file = client.functions.get(command.slice(prefix.length))
    if (command_file) command_file.run(client, message, args, prefix)
})

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {

    const actvs = [
    "GTA Online",
    "Call of Duty: Warzone",
    "Forza Horizon 5",
    "Stalker 2",
    "Minecraft",
    "Battlefield 5",
    "Overwatch 2",
    "Far Cry 6",
    "Halo Infinite",
    "Hitman 3",
    "Ghostwire: Tokyo",
    "Marvel's Spider Man"
    ];
    client.user.setPresence({ 
            status: 'dnd', 
            activity: { 
                name: `${actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]}`,
                type: "COMPETING" 
            } 
        });
    setInterval(() => { 
    	client.user.setPresence({ 
            status: 'dnd', 
            activity: { 
                name: `${actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)]}`,
                type: "COMPETING" 
            } 
        });
    }, 60000);
});