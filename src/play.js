const fileSystem = require('fs');
const path = require('path');

var servers = {};

module.exports = async function (msg, bot) {
    if(msg.content.startsWith("!play")) {
        const channel = msg.member.voice.channel;
        if(!channel) {
            msg.reply("Vous devez être connecté dans un channel vocal");
            return;
        }
        msg.reply("OK");
        channel.join().then(connection => {
            connection.play("./lib/goat.mp3")
                .on("finish", function () {
                    channel.leave();
                });
        });
    }
};
