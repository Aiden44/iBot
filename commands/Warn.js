const Match = require("../utils/Match");
const Discord = require("discord.js");
const Log = require("./SendLog");
module.exports = class BotInfo {

    static execute(message, bot) {
        if(Match.match(message, "iWarn", true)) {
            this.warn(message, bot)
        }
    }

    static warn(message, bot) {
        const PREFIX = "iWarn"
        var args = message.content.substring(PREFIX.length).split (" ");
        var args2 = message.content.split(" ").slice(1);
        var reason = args2.slice(1).join(" ");
        const user = message.mentions.users.first();
        if(message.mentions.users.size < 1) return message.reply(" please mention an user!");
        const logPanel = new Discord.RichEmbed();
        logPanel.setColor("#FF5800");
        logPanel.setTitle("Warn command");
        logPanel.setThumbnail(message.mentions.users.first().displayAvatarURL)
        logPanel.setTimestamp();
        logPanel.addField("From", message.author.username);
        logPanel.addField("To", message.mentions.users.first().username);
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(" you don't have the right to execute this command ! :no_entry_sign:");
        if(!message.member.guild.channels.find("name", "logs")) return message.reply(" please make sure that you have a **logs** channel !");
        if(reason.length < 1) {
                message.reply(" please send the reason :no_entry_sign:")
                message.react('🚫');
        } else {
            logPanel.addField("Reason", reason);
                user.send("You have been warn on **" + message.guild.name + "** for :\n*" + reason + "*").then(function() {
                message.channel.send(user.toString() + " " + " as been warn for: *" + reason + "* :white_check_mark:");
                message.delete().then(function(){
                    Log.send(message, logPanel, true);
                })
                });
        }
    }

}