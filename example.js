const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(prefix + cmdName)

if(isValidCommand(message, "help")) {
    const embed = new discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setDescription(`The prefix of **${message.guild.name}** is **${prefix}**`)
    .addFields(
      {name: "Look For Game (LFG) commands", value: "React with 🎮"},
      {name: "Miscellaneous commands", value: "React with 🛠️"},
      {name: "Fun commands", value: "React with 😂"},
      {name: "Moderation commands", value: "React with 🔨"}
    )
    const msg = await message.channel.send(embed)
    await msg.react('🎮')
    await msg.react('🛠️')
    await msg.react('😂')
    await msg.react('🔨')  
    const LFGFilter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id
    const LFG = msg.createReactionCollector(LFGFilter)
    const miscFilter = (reaction, user) => reaction.emoji.name === '🛠️' && user.id === message.author.id
    const misc = msg.createReactionCollector(miscFilter)
    const funFilter = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id
    const fun = msg.createReactionCollector(funFilter)
    const modFilter = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id
    const mod = msg.createReactionCollector(modFilter)
    const backFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id
    const back = msg.createReactionCollector(backFilter)

    const lfgembed = new discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .addFields(
    {name: `${prefix}lfgas`, value: "<@role> anyone wanna play with <user>"},
    {name: `${prefix}lfgeu`, value: "<@role> anyone wanna play with <user>"},
    {name: `${prefix}lfgna`, value: "<@role> anyone wanna play with <user>"},
    {name: `${prefix}lfgkr`, value: "<@role> anyone wanna play with <user>"},
    {name: `${prefix}lfgsa`, value: "<@role> anyone wanna play with <user>"},
    )  
    .setTimestamp()
    
    const miscembed = new discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .addFields(
        {name: `${prefix}userinfo`, value: "User info. Enter an user ID to see theirs."},
        {name: `${prefix}serverinfo`, value: "Server info."},
        {name: `${prefix}info`, value: "Get the bot's info."},
        {name: `${prefix}uptime`, value: "Uptime of the bot."},
        {name: `${prefix}youtube`, value: "Search a video on YouTube."}
)  
    .setTimestamp()

    const funembed = new discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .addFields(
        {name: `${prefix}howgay`, value: "Just see how gay you are lol"},
        {name: `${prefix}howpro`, value: "Wow big pro 😎"},
        {name: `${prefix}hownob`, value: "So noob lol"},
        {name: `${prefix}say`, value: "Says a message to the current channel."},
        {name: `${prefix}meme`, value: "Nothing more, nothing less. Just memes from reddit"},
    )  
    .setTimestamp()

    const modembed = new discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .addFields(
        {name: `${prefix}purge`, value: "Deletes messages."},
        {name: `${prefix}kick`, value: "Kicks a member"},
        {name: `${prefix}!banid`, value: "Bans a user using their ID."},
        {name: `${prefix}unbanid`, value: "Unbans a user using their ID."},
        {name: `${prefix}warn`, value: "Warns a member"},
        {name: `${prefix}listwarns`, value: "Lists a member's past warnings."},
        {name: `${prefix}lock`, value: "Locks the channel where the command was executed, with an optional reason."},
        {name: `${prefix}unlock`, value: "Unlocks the channel where the command was executed, with an optional reason."}

    )  
    .setTimestamp()

        LFG.on('collect', async r => {
            msg.edit(lfgembed)
            await msg.reactions.removeAll()
            await msg.react('◀️')
        })

        misc.on('collect', async r => {
            msg.edit(miscembed)
            await msg.reactions.removeAll()
            await msg.react('◀️')
        })

        fun.on('collect', async r => {
            msg.edit(funembed)
            await msg.reactions.removeAll()
            await msg.react('◀️')
        })

        mod.on('collect', async r => {
            msg.edit(modembed)
            await msg.reactions.removeAll()
            await msg.react('◀️')
        })
        
        back.on('collect', async r => {
          msg.edit(embed)
          await msg.reactions.removeAll()
          await msg.react('🎮')
          await msg.react('🛠️')
          await msg.react('😂')
          await msg.react('🔨')        
        })
}
