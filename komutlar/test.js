const Discord = require('discord.js');

exports.run = (client, args, message) => {
  message.reply(`test!`)
};

exports.conf = {
  aliases: ['deneme', 'dene'], // Burası ise bu komutun yan komutları
  permLevel: 0
  // Komutun gerekli yetki seviyesi:
  // 0: Herkes
  // 1: Mesajları Yönet yetkisine sahip kişiler
  // 2: Üyeleri Yasakla yetkisine sahip kişiler
  // 3: Yönetici yetkisine sahip kişiler
  // 4: Botun sahibi 
};

exports.help = {
  name: 'test', // Komutun ismi (!test)
  description: 'Değişiklikleri gösterir.', // Komutun açıklaması
  usage: 'test' // Komutun kullanımı
};
