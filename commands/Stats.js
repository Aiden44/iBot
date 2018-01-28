const Match = require("../utils/Match");
const Discord = require("discord.js");
module.exports = class Stats {

    static execute(message) {
        if(Match.match(message, "iStats", true)) {
            this.sendHelp(message)
        }
    }

    static sendHelp(message) {
        const docInfoEmbed = new Discord.RichEmbed();
        docInfoEmbed.setAuthor(message.member.displayName, message.member.user.avatarURL);
        docInfoEmbed.setDescription("There is the stats of the server!");
        docInfoEmbed.addField("Users", "Where are **" + message.guild.memberCount + "** users!");
        docInfoEmbed.addField("Channels", "There is **" + message.guild.channels.size + "** channels!");
        docInfoEmbed.addField("Name", "The server is named **" + message.guild.name  + "**");
        docInfoEmbed.setTimestamp();
        docInfoEmbed.setThumbnail()
        docInfoEmbed.setColor("#FF5800");
        message.react('✅');
        message.channel.sendEmbed(docInfoEmbed);
    }

}