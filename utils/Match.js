module.exports = class Match {
    static match(message, match, startsWith = false) {
        if(startsWith) return message.content.startsWith(match);
        else return message.content == startsWith;
    }

    static findChannel(message, channel) {
        const channel = message.guild.channels.find("name", channel);
        return channel;
    }

    static sendMessage(message, channel, embed = false, messageToSend) {
        if(embed) message.guild.channels.find("name", channel).sendEmbed(messageToSend);
        else message.guild.channels.find("name", channel).sendMessage(messageToSend);
    }
}
