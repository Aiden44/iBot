const Match = require("../utils/Match");
module.exports = class Fun {

    static execute(message) {
        if(Match.match(message, "iBot", true)) this.reply(message)
    }

    static reply(message) {
        message.reply(" hey ! I'm **iBot**, the best Discord Bot !");
        message.delete();
    }

}