const Match = require("../utils/Match");
const Discord = require("discord.js");
module.exports = class Fun {

    static execute(message) {
        if(Match.match(message, "iAvatar", true)) this.reply(message)
    }

    static reply(message) {
<<<<<<< HEAD
        const user = message.mentions.users.first()
        if(user.size < 1) {
            message.reply(" there is your avatar !: " + message.author.displayAvatarURL);
            message.react("✅");
        } else {
            message.reply(" there the avatar of " + user.toString()  +  ": " + message.mentions.users.first().displayAvatarURL;
            message.react("✅");
        }
=======
        message.reply(" there is your avatar !: " + message.author.displayAvatarURL);
        message.react("✅");
>>>>>>> 338082f1ed16d115c053a32533835fe37a340484
    }

}
