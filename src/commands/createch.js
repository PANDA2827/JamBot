var multilevel = require('multilevel')
var levelup = require('levelup')
var leveldown = require('leveldown')
var net = require('net')

const db = levelup(leveldown('./ch'))

var account = message.author.id

function trade (message) {
  db.get(account, channel, function (err) {
    if (err) {
      console.log(err)
      if (err.notFound) {
        message.guild.createChannel('trade-' + message.author.discriminator).then(channel => {
          db.put(account, channel, function(err) {
          message.channel.send(message.author.toString() + ', Private channel created, please proceed to ' + channel)
          }
        }
      }
    }
    else {
      message.channel.send(message.author.toString() + ', please proceed to ' + channel)
        }
    }
  }

module.exports = createch
      
        
