const Discord = require('discord.js');

module.exports = client => {
  console.log(`${client.user.username} olarak giriş yapıldı.`);

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