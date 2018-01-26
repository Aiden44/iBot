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

client.on('ready', () => {
    console.log("logged as: " + client.user.username);
    client.user.setGame(`iHelp ${client.guilds.size} servers !`);
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
})

client.login(token);
