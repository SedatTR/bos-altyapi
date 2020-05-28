const Discord = require('discord.js');

exports.run = (client, args, message) => {
  // Buraya kodlarınızı ekleyebilirsiniz.
  message.channel.send(`Test!`);
};

exports.config = {
  name: "test", // Komutun ana komutu.
  permission: "ADMINISTRATOR", // Komut için gereken yetki
  // BOT_OWNER : Sadece bot sahibi kullanabilir.
  // SERVER_OWNER : Sadece sunucu sahibi kullanabilir.
  // Discord Yetki İsimleri: https://discord.com/developers/docs/topics/permissions
  aliases: ["deneme"] // Komutun yan komutları.
};