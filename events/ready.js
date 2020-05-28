const Discord = require('discord.js');
const moment = require('moment');

module.exports = client => {
  console.log(`${moment().format("hh:mma DD/MM/YYYY")} | ${client.user.tag} olarak giriş yapıldı.`);
  console.log(`${moment().format("hh:mma DD/MM/YYYY")} | Bot ${client.guilds.cache.size} sunucuya, ${client.users.cache.size} üyeye hizmet ediyor.`);

  setInterval(async () => {
    const statuslist = [
      `Bot Oynuyor Mesajı 1`,
      `Bot Oynuyor Mesajı 2`,
      `Bot Oynuyor Mesajı 3`
    ];
    const random = Math.floor(Math.random() * statuslist.length);
    try {
      await client.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "PLAYING"
        },
        status: "online"
     });
    } catch (error) {
      console.error(error);
    }
  }, 15000);
}; 