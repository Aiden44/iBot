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
        docInfoEmbed.setDescription("iBot informations !");
        docInfoEmbed.addField("Who's iBot ?", "iBot is a discord bot made by WebDev in NodeJS. This bot help you manage your server and add a multiple and usefull commands for users and developers.");
        docInfoEmbed.addField("Ping", "The ping of the bot is **" + bot.ping + "** ms");
        docInfoEmbed.addField("Servers", "iBot is currently in **" + bot.guilds.size + "** servers and **" + bot.users.size + "** users!");
        docInfoEmbed.setThumbnail("https://3.bp.blogspot.com/-3g1VKe8UW2Q/WMa_tYDquKI/AAAAAAAAZQo/3spVwUE4qyUJNeoIBMh8BwkoWpqfx6EbQCLcB/s1600/Gifs%2Banimados%2BMonstro%2B3.gif");
        docInfoEmbed.setTimestamp();
        docInfoEmbed.setColor("#00D1FD");
        message.react('✅');
        message.channel.sendEmbed(docInfoEmbed);
    }

}