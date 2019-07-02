const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("595651222359506996")
setInterval(function() {
channel.send(`fares.fares`);
}, 30)
})

client.login(process.env.BOT_TOKEN);