const Match = require("../utils/Match");
const Discord = require("discord.js");
module.exports = class Help {

    static execute(message) {
        if(Match.match(message, "iRoll", true)) {
            this.sendNumber(message)
        }
    }

    static sendNumber(message) {
        const args = message.content.split(" ");
        const num1 = args[1];
        console.log(num1);
        const num2 = args[2];
        if(args.length <= 1) return message.reply(" please send two number !");
        if(args.length <= 2) return message.reply(" please send two number !");
        console.log(num2);
        const numberGenerated = Math.floor(Math.random() * parseInt(num2) + num1);
        if(isNaN(numberGenerated)) return message.reply(" please enter an integer !");
        console.log(numberGenerated);
        const generatedEmbed = new Discord.RichEmbed();
        generatedEmbed.setTitle("You number has been generated !");
        generatedEmbed.addField("Generated number", numberGenerated);
        generatedEmbed.setTimestamp();
        generatedEmbed.setColor("#FF5800");
        message.react('✅');
        message.channel.sendEmbed(generatedEmbed);
    }

}