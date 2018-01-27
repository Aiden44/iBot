const Match = require("../utils/Match");
const Discord = require("discord.js");
module.exports = class Help {

    static execute(message) {
        if(Match.match(message, "iHelp", true)) {
            this.sendHelp(message)
        }
    }

    static sendHelp(message) {
        const docInfoEmbed = new Discord.RichEmbed();
        docInfoEmbed.setAuthor(message.member.displayName, message.member.user.avatarURL);
        docInfoEmbed.setDescription("There principal commands that you can use with the bot!\nNote: **the bot is currently under develpment !**");
        docInfoEmbed.addField("iUsers", "See number of users in the server");
        docInfoEmbed.addField("iBotInfo", "See bot info");
        docInfoEmbed.addField("iDocInfo", "See the doc info commands");
        docInfoEmbed.addField("iWarn @user <reason>", "Warn an user. **Only accessible for user that have iAdmin rôle.**");
        docInfoEmbed.addField("iRoll <num1> <num2>", "Generate a number beetween **num1** and **num2**");
        docInfoEmbed.setColor("#00D1FD");
        message.channel.sendEmbed(docInfoEmbed);
    }

}