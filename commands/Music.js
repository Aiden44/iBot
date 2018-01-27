const Util = require("../utils/Match");
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
module.exports = class Music {

    static start(message, servers) {
        if(Util.match(message, "iPlay", true)) this.play(message, servers);
    }

    static play(message, servers) {
        const PREFIX = "iPlay";
        const args = message.content.substring(PREFIX.length).split(" ");
        if(!args[1]) return message.reply(" please provide a youtube link !");
        if(!message.member.voiceChannel) return message.reply(" you must be in a voice channel !");
        const server = servers[message.guild.id];
        message.member.voiceChannel.join();
    }

    static playMusic(connect, message) {
        let server = servers[message.guild.id];
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
        server.queue.shift();
        server.dispatcher.on("end", function(){
            if(server.queue[0]) play(connect, message);
            else connect.disconnect();
        });
    }
}