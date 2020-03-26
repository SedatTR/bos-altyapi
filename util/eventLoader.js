const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  // Burada olayları yüklüyoruz, başka olay oluşturmak için şu kodu kopyalayabilirsiniz:
  // client.on('olayismi', reqEvent('olayismi'));
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
};
