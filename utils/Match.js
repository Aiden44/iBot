module.exports = class Match {
    static match(message, match, startsWith = false) {
        return startsWith ? message.content.startsWith(match) : message.content == startsWith;
    }

    static findChannel(message, channel) {
        const channel = message.guild.channels.find("name", channel);
        return channel;
    }

    static sendMessage(message, channel, embed = false, messageToSend) {
        return embed ? message.guild.channels.find("name", channel).sendEmbed(messageToSend) : message.guild.channels.find("name", channel).sendMessage(messageToSend);
    }
}
