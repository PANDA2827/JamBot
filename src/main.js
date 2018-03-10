const Discord = require('discord.js')

const settings = require('./settings')
const Commands = require('./commands')

// Init the Discord client
const client = new Discord.Client()

client.on('message', message => {

  // If message has been emitted by a bot do nothing
  if (message.author.bot) return

  if (message.content.startsWith('-jam')) {
    var args = message.content.substring(1).split(' ')
    var command = args[1]

    switch (command) {
      case 'help':
        Commands.help(message)
        break
      case 'balance':
        Commands.balance(message, Zcash)
        break
      default:
        message.reply('Jam on my bread')
    }
  }
})

client.login(settings.DISCORD_TOKEN)
