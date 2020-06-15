const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const goat = require("./src/goat");
const color = require("./src/color");

colors = ["Orange", "Bleu", "Jaune", "Violet", "Gris"];

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    // when anyone say goat the bot reply with goat !!
    goat(msg);
    // can change pseudo color
    color(msg);
});

bot.login(process.env.token);
