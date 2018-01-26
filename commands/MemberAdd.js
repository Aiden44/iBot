const Util = require("../utils/Match");
const Discord = require("discord.js");
module.exports = class MemberAdd {
    static ext(user) {
        const embed = new Discord.RichEmbed();
        embed.setAuthor(user.displayName, user.user.displayAvatarURL)
        embed.setTitle("Member joined !");
        embed.addField("Name", user.displayName);
        embed.setColor(user.displayHexColor);
        embed.setTimestamp();
        embed.setThumbnail(user.user.displayAvatarURL);
        user.guild.channels.find("name", "logs").sendEmbed(embed);
    }
}