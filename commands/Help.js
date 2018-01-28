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
        docInfoEmbed.addField("iInfos", "See the informations of the server (number of users, number of channels, ect.)");
        docInfoEmbed.addField("iBotInfo", "See bot info");
        docInfoEmbed.addField("iGithub", "Send the github code of the bot");
        docInfoEmbed.addField("iAvatar", "Send your display avatar in **HD**");
        docInfoEmbed.addField("iAvatar @mention", "Send the avatar of the user that you've mentionned in **HD**");
        docInfoEmbed.addField("iDocInfo", "See the doc info commands");
        docInfoEmbed.addField("iWarn @user <reason>", "Warn an user. **Only accessible for user that have iAdmin rôle.**");
        docInfoEmbed.addField("iRoll <num1> <num2>", "Generate a number beetween **num1** and **num2**");
        docInfoEmbed.setColor("#FF5800");
        docInfoEmbed.setTimestamp();
        message.react('✅');
        message.channel.sendEmbed(docInfoEmbed);
    }

}