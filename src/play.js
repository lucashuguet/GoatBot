module.exports = async function (msg, bot) {
    if(!channel) {
        msg.reply("Vous devez être connecté dans un channel vocal");
        return;
    }
    msg.reply("je me connecté à votre channel vocal.");
    channel.join().then(connection => {
        connection.play("./lib/goat.mp3")
            .on("finish", function () {
                channel.leave();
            });
    });
};
