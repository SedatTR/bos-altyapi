const Discord = require('discord.js');

exports.run = (client, message, args, command) => {
  // Buraya kodlarınızı ekleyebilirsiniz.
  message.channel.send(`Test!`);
};

exports.config = {
  name: "test", // Komutun ana komutu.
  permission: "ADMINISTRATOR", // Komut için gereken yetki
  // NONE : Herkes kullanabilir.
  // BOT_OWNER : Sadece bot sahibi kullanabilir.
  // SERVER_OWNER : Sadece sunucu sahibi kullanabilir.

  // Buraya Discord'daki yetki isimlerini de yazabilirsin.
  // ADMINISTRATOR, MANAGE_MESSAGES gibi.
  // Discord Yetki İsimleri: https://discord.com/developers/docs/topics/permissions
  aliases: ["deneme"] // Komutun yan komutları.
};