//variables
require('dotenv').config();
const Discord = require('discord.js');
const PREFIX = 'a!';
const bot = new Discord.Client();
//const TOKEN = require("./auth").token;
var version = '1.0.0 alpha';
var x = 'use !invite to add our bot to your server!';
var tag = '#3961';
const usedCommandRecently = new Set();
//end of variables

//boot
bot.on('ready', () =>{
    console.log('This bot is on GGs');
    bot.user.setActivity('Watching EJ develop bots');
})
//end of boot




//self reply commands
bot.on('message', message =>{
    switch(message.content.toLowerCase()) {
        case 'hello':
            message.reply('hello there i am AWL bot!');
        break;
        case 'kek':
            message.channel.send('kekw');
        break;
    }
});
bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            var yourping = new Date().getTime() - message.createdTimestamp
            var botping = Math.round(bot.ws.ping)
            const embed = new Discord.MessageEmbed()
                .setAuthor('ping calculator', 'https://cdn.discordapp.com/attachments/794680190553817108/795625238863544330/0EiFF0fjGhm13BvDS.gif')
                .setColor('BLUE')
                .setDescription(`Your ping: ${yourping} \nBots ping: ${botping}`)
            message.reply(embed);
            break;
        case 'website':
            if(usedCommandRecently.has(message.author.id)){
                message.reply('you cannont use that command just yet! wait another 30 seconds!');
            } else{
                message.reply('https://www.youtube.com/channel/UCvIbKLXyjsyGeoFWuugaOwA');

                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id)
                    }, 30000);
            }
            break;
            }
        });


       
        bot.on('message', message=>{
            let args = message.content.substring(PREFIX.length).split(" ");
        
            switch(args[0]){
                case 'invite':
                    const embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('https://discord.com/oauth2/authorize?client_id=794512017654022155&scope=bot&permissions=126016')
                    message.channel.send(embed)
                break;
                

                    
                
            }
        
        });  

    
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'update':
            const embed = new Discord.MessageEmbed()
    
            .setColor('#0099ff')
            .setTitle('invite')
            .setURL('https://discord.com/oauth2/authorize?client_id=794512017654022155&scope=bot&permissions=126016')
            .setAuthor('Asia war league bot', 'https://cdn.discordapp.com/icons/691607053285720104/f9c2c2a81b776a05f1e550031d2c7996.jpg')
    
            .addFields(

                { name: '- Version 1.0.3' , value: '\u200b', },
                { name: '- added new commands' , value: 'use !score to show the challonge brackets of asia war league', },
                { name: '- improved bot response', value: '\u200b' },
                { name: '- added auto mod facility', value: 'WIP , auto role on joining' },
                { name: '- bot deployment', value: 'awl bot will be uploaded to heroku for 24/7 coverage soon'}
    
                )
    
                .setTimestamp()
                .setFooter('Developed by : EJ BEAN#3961', 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png');
                message.channel.send(embed)

            break;
            
    }
});

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'help':
            const embed = new Discord.MessageEmbed()
    
            .setColor('#0099ff')
            .setTitle('help / commands and functions')
            .setTitle('invite')
            .setURL('https://discord.com/oauth2/authorize?client_id=794512017654022155&scope=bot&permissions=126016')
            .setAuthor('Asia war league bot', 'https://cdn.discordapp.com/icons/691607053285720104/f9c2c2a81b776a05f1e550031d2c7996.jpg')
    
            .addFields(

                { name: '- bot prefix' , value: 'a!', },
                { name: '- AWL challonge score board' , value: 'use !score to show the challonge brackets of asia war league', },
                { name: '- invite', value: 'use !invite for the official AWL bot invite URL', },
                { name: '- version', value: 'use !update for official AWL bot change logs and !version for the official bot version' },
                { name: '\u200b', value: '\u200b',},
                { name: '- bot deployment', value: 'awl bot will be uploaded to heroku for 24/7 coverage soon'}
    
                )
    
                .setTimestamp()
                .setFooter('Developed by : EJ BEAN#3961', 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png');
                message.channel.send(embed);

            break;
            
    }
});


                bot.on('message', message=>{
                    let args = message.content.substring(PREFIX.length).split(" ");
                    switch(args[0]){
                        case 'score':
                    const embed = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .addFields(
                        { name: '- AWL ss4 league A' , value: 'https://challonge.com/w8hvottl', },
                        { name: '- AWL ss4 league B' , value: 'https://challonge.com/v9pz2wta', },
                    )
                    .setFooter('Developed by : EJ BEAN#3961', 'https://cdn.discordapp.com/attachments/793195039731482648/793533247967461416/ej1.png');
                    message.channel.send(embed);
    
                break;
                        
                            
                    }
                });
                
bot.login(process.env.TOKEN);