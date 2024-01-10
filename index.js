const Discord = require("discord.js-selfbot-v13"); 
const amtixdev = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

const { amtixdev } = require("sphinx-run");
new amtixdev(client, Discord).leveling({
    channel: '', // تحط اي دي الشانل هنا
    randomLetters: false, 
    time: 5000,
    type: 'eng'
});

amtixdev.login(process.env.token);
