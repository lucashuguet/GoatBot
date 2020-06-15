const clear = require("./clear");
module.exports = function (msg) {
    let member = msg.guild.member(msg.author);
    const role = msg.guild.roles.cache.find(role => role.name === "Chèvre de basse qualité");
    member.roles.add(role);
    clear(msg);
};
