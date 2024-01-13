require("dotenv").config();

const discord = require("discord.js-selfbot-v13"); 
const client = new discord.Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

const {userAccount} = require("sphinx-run");
new userAccount(client, discord).leveling({
    channel: "1195813914219393217",
    randomLetters: false,
    time: 10000, 
    type: 'eng',
});

client.login(process.env.token);
