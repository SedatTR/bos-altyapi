const settings = require('../settings.json');
const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment');
const prefix = settings.prefix;

module.exports = async (client, message) => {
  if (!message.guild) return;
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  if (!cmd) return;
    
  const permission = await client.permission(message, cmd.config.permission);
  if (permission !== true) return message.channel.send(`Bu komutu kullanabilmek için ${cmd.config.permission.replace("_", " ")} yetkisine ihtiyacın var.`);
  
  if (cmd) cmd.run(client, message, args, command);
};