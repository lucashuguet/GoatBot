module.exports = function (msg) {
    if (msg.content.startsWith("!color")) {
            if(msg.channel.id == "721769746139447352") {
                msg_splited = msg.content.split(" ");
                if(msg_splited.length != 2) {
                    msg.reply("Cette syntaxe est incorrecte");
                }else{
                    let member = msg.guild.member(msg.author);

                    roles_list = member._roles;
                    roles_list_names = [];
                    roles_list.forEach(function(i) {
                        let myrole = msg.guild.roles.cache.get(i);
                        roles_list_names.push(myrole.name);
                    });

                    if(msg_splited[1] == "list") {
                        msg.reply("");
                    }

                    colors_ok = false;
                    colors.forEach(function(i){
                        if(i.includes(msg_splited[1])){
                            colors_ok = true;
                        }
                        roles_list_names.forEach(function(x) {
                            if(i == x) {
                                const to_del_role = msg.guild.roles.cache.find(role => role.name === x);
                                member.roles.remove(to_del_role);
                            }
                        });
                    });
                    if(msg_splited[1] == "reset") {
                        msg.reply("Votre couleur a bien été réinitialisée");
                    } else {
                        if(colors_ok) {
                            const role = msg.guild.roles.cache.find(role => role.name === msg_splited[1]);
                            member.roles.add(role);
                            msg.reply("Tout est bon !!");
                        } else {
                            msg.reply("Cette couleur n'existe pas");
                        }
                    }
                }
            }
    }
}
