module.exports = function (msg) {
    const goat = ["chèvre", "chevre", "goat"];
    msg_content = msg.content.toLowerCase();
    goat.forEach(function (i) {
        if (msg_content == i) {
            msg.reply("Chèvre !!!");
        }
    });
};
