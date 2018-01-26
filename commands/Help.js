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
        docInfoEmbed.setDescription("There is all the commands that you can use with the bot !");
        docInfoEmbed.addField("iUsers", "See number of users in the server");
        docInfoEmbed.addField("iDocInfo", "See the doc info commands");
        docInfoEmbed.setColor("#00D1FD");
        message.channel.sendEmbed(docInfoEmbed);
    }

    static sendDoc(message) {

        const args = message.content.split(" ");
        if(args.length <= 1) return message.reply(" please send a language. Do iDocInfo for more informations.");

        switch (args[1].toLowerCase()) {
            case "php":
                message.reply(" there is the PHP documentation ! https://secure.php.net/docs.php");
                break;
            case "python":
                message.reply(" there is the Python documentation ! https://docs.python.org/3/");
            break;

            case "javascript":
                message.reply(" there is the Javascript documentation ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference");
            break;
            case "java":
                message.reply(" there is the Java documentation ! https://docs.oracle.com/javase/7/docs/api/");
            break;
            case "c":
                message.reply(" there is the C documentation ! http://devdocs.io/c/");
            break;
            case "c++":
                message.reply(" there is the C++ documentation ! http://devdocs.io/cpp/");
            break;
            case "go":
                message.reply(" there is the Go ocumentation ! https://golang.org/doc/");
            break;
            case "swift":
                message.reply(" there is the Swift documentation ! https://developer.apple.com/documentation/swift");
            break;
            case "objective-c":
                message.reply(" there is the Objective-c documentation ! https://developer.apple.com/documentation/objectivec");
            break;
        
            default:
                break;
        }
    }

}