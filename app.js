const System = require("./utils/System");
const client = System.init();
/*
    Constants
*/
const Avatar = require("./commands/Avatar");
const Doc = require("./commands/Doc");
const MemberAdd = require("./commands/MemberAdd");
const Help = require("./commands/Help");
const BotInfo = require("./commands/Botinfo");
const Roll = require("./commands/Roll");
const Music = require("./commands/Music");
const Warn = require("./commands/Warn");

let servers = {};

client.on('ready', () => {
    console.log("logged as: " + client.user.username);
    client.user.setAvatar("https://3.bp.blogspot.com/-3g1VKe8UW2Q/WMa_tYDquKI/AAAAAAAAZQo/3spVwUE4qyUJNeoIBMh8BwkoWpqfx6EbQCLcB/s1600/Gifs%2Banimados%2BMonstro%2B3.gif");
    client.user.setGame(`iHelp ${client.guilds.size} servers! ${client.users.size} users!`, "https://www.twitch.tv/iBot");
    client.user.setUsername("iBot");
});

client.on('guildMemberAdd', (user) => {
    MemberAdd.ext(user);
    user.send("Hey ! Welcome to **" + user.guild.name + "** Discord Server ! My name is **iBot** i'm here to help you ;)");
});


client.on("message", (message) => {
    Avatar.execute(message);
    Doc.execute(message);
    Help.execute(message);
    BotInfo.execute(message, client);
    Roll.execute(message);
    Warn.execute(message, client);
})

client.login(token);
