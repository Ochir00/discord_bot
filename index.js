const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,             // Сэрвэрийн үндсэн интент
    GatewayIntentBits.GuildMessages,      // Сэрвэрийн мессеж унших интент
    GatewayIntentBits.MessageContent      // Мессежийн текст унших интент
  ]
});

client.once('ready', () => {
  console.log(`Бот бэлэн боллоо: ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '!hello') {
    message.channel.send('Сайн уу! Би бэлэн байна.');
  }
    if (message.content === '!hi') {
    message.channel.send('Сайн уу! Би бэлэн байна.');
  }
    if (message.content === '!kill') {
    message.channel.send('dongos');
  }
    if (message.content === '!owo') {
    message.channel.send('owo help');
  }
      if (message.content === '!masha') {
    message.channel.send('hello mashaa');
  }
        if (message.content === '!masha nas hed ve') {
    message.channel.send('@masha 16tai');
  }
});

client.login(process.env.DISCORD_TOKEN);