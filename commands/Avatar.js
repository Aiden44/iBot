const Match = require("../utils/Match");
const Discord = require("discord.js");
module.exports = class Fun {

    static execute(message) {
        if(Match.match(message, "iAvatar", true)) this.reply(message)
    }

    static reply(message) {
        message.channel.send("Hey ! There is your avatar");
        message.delete();
    }

}