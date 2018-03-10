const config = require('../config.json')

var settings = {}

settings.DISCORD_ID = process.env.DISCORD_ID || config.discord.id
settings.DISCORD_SECRET = process.env.DISCORD_SECRET || config.discord.secret
settings.DISCORD_TOKEN = process.env.DISCORD_TOKEN || config.discord.token

module.exports = settings
