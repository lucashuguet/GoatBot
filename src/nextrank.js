module.exports = function (msg) {
    let member = msg.guild.member(msg.author);
    console.log(member.joinedAt.toLocaleDateString);
};
