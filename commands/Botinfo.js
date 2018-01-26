const Match = require("../utils/Match");
const Discord = require("discord.js");
module.exports = class BotInfo {

    static execute(message, bot) {
        if(Match.match(message, "iBotInfo", true)) {
            this.sendInfo(message, bot)
        }
    }

    static sendInfo(message, bot) {
        const docInfoEmbed = new Discord.RichEmbed();
        docInfoEmbed.setAuthor(message.member.displayName, message.member.user.avatarURL);
        docInfoEmbed.setDescription("There principal commands that you can use with the bot!");
        docInfoEmbed.addField("Who's iBot ?", "iBot is a discord bot made by WebDev in NodeJS. This bot help you manage your server and add a multiple and usefull commands for users and developers.");
        docInfoEmbed.addField("Ping", "The ping of the bot is **" + bot.ping + "** ms");
        docInfoEmbed.setThumbnail("https://st2.depositphotos.com/4584623/7213/v/950/depositphotos_72139677-stock-illustration-funny-monster-face.jpg");
        docInfoEmbed.setTimestamp();
        docInfoEmbed.setColor("#00D1FD");
        message.channel.sendEmbed(docInfoEmbed);
    }

}