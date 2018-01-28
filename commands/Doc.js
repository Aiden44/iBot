const Match = require("../utils/Match");
const Discord = require("discord.js");
module.exports = class Doc {

    static execute(message) {
        if(Match.match(message, "iDocInfo", true)) {
            this.sendDocInfo(message)
        } else if(Match.match(message, "iDoc", true)) {
            this.sendDoc(message);
        }
    }

    static sendDocInfo(message) {
        const docInfoEmbed = new Discord.RichEmbed();
        docInfoEmbed.setAuthor(message.member.displayName, message.member.user.avatarURL);
        docInfoEmbed.setDescription("There is the doc commands that you can use with the Bot.");
        docInfoEmbed.addField("PHP", "Send PHP doc");
        docInfoEmbed.addField("Javascript", "Send Javascript doc");
        docInfoEmbed.addField("Java", "Send Java doc");
        docInfoEmbed.addField("C", "Send C doc");
        docInfoEmbed.addField("C#", "Send C# doc");
        docInfoEmbed.addField("C++", "Send C++ doc");
        docInfoEmbed.addField("GO", "Send Go doc");
        docInfoEmbed.addField("Swift", "Send Swift doc");
        docInfoEmbed.addField("Objective-c", "Send Objective-c doc");
        docInfoEmbed.addField("Python", "Send Python doc");
        docInfoEmbed.setColor("#FF5800");
        docInfoEmbed.setTimestamp();
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