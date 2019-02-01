const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>> Oynuyor kısmı başarıyla güncellendi. <<');
console.log(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
console.log('>> Bot Hazır Giriş Yapıldı! <<');

    var Games = [

        " KAYA 1",
      
     


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], `https://www.twitch.tv/troyunculuk`)
        }, 2 * 2500);

}; 