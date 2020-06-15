const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const goat = require("./src/goat");
const color = require("./src/color");
const play = require("./src/play");
const clear = require("./src/clear");
const lu = require("./src/lu");
const nextrank = require("./src/nextrank");

colors = ["Orange", "Bleu", "Jaune", "Violet", "Gris"];

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

    // when anyone say goat the bot reply with goat !!
    goat(msg);

    // channel #bot
    if(msg.channel == "721769746139447352") {
        console.log(msg.author.username + " runned " + msg.content);
        switch(msg.content.split(" ")[0]) {
        case "!color":
            // can change pseudo color
            color(msg);
            break;
        case "!play":
            // play goat sound
            play(msg, bot);
            break;
        }
    }

    // channel # accueil
    if(msg.channel == "721723801498550375") {
        switch(msg.content.split(" ")[0]) {
        case "!lu":
            lu(msg);
            break;
        default:
            clear(msg);
        }
    }

    // channel # demande de roles
    if(msg.channel == "722182089662791740") {
        switch(msg.content.split(" ")[0]) {
        case "!nextrank":
            nextrank(msg);
        case "default":
            msg.reply("Pour monter en role utilisez la commande !nextrank");
        }
    }
});

bot.login(process.env.token);
