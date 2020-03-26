const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    message.channel.send("> ( ͡° ͜ʖ ͡°)");
    message.delete();

}

module.exports.help = {
    name: "lenny",
	aliases: ["( ͡° ͜ʖ ͡°)"],
	description: "( ͡° ͜ʖ ͡°)",
	usage: "( ͡° ͜ʖ ͡°)",
	category: "Zabawa",
}