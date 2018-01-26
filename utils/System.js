module.exports = class System {
    static init() {
        const Discord = require("discord.js");
        const client = new Discord.Client();
        return client;
    }

}