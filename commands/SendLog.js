const Match = require("../utils/Match");
const Discord = require("discord.js");
module.exports = class SendLog {

    static send(message, embed1 = "", embed = false) {
        if(embed) {
            message.member.guild.channels.find("name", "logs").sendEmbed(embed1);
        } else {
            message.member.guild.channels.find("name", "logs").message(message);
        }
    }

}