require("dotenv").config();
const discord = require("discord.js-selfbot-v13"); 

const express = require("express");
const app = express();

const ONLINE_USERS = [];

/* Split the tokens with /split/ */

if(!process.env.token) throw Error("[TOKEN] No Token was provided!")

for(let i of process.env.token.split("/split/")) {  // هتقسم كل توكن بـ /split/ 

const client = new discord.Client({
  checkUpdate: false
});

client.on("ready", () => {

  console.log(`${client.user.username} is ready!`);
  ONLINE_USERS.push(client.user.username);
});

const {userAccount} = require("sphinx-run");

const Random = Math.floor(Math.random() * 15) + 10;

  new userAccount(client, discord).leveling({
    channel: "1228760120377348310", // ايدي روم هنا
    randomLetters: false,
    time: Random * 1000, 
    type: 'eng',
});

client.login(i);

}

app.get("/", (req, res) => {
  res.json({ message: "Success", users: ONLINE_USERS || "None!" });
});

app.listen(3000, function() {
  console.log("Express APP is listening on port 3000!");
});
