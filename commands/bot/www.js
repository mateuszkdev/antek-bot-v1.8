const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor("Strona www", bot.user.displayAvatarURL)
    .setDescription("Nasza strona www znajdzesz tam wszystko co jesteśmy w stanie ci zaoferować :)")
    .setTitle("Kliknij tutaj")
    .setURL("http://51.83.149.211/")
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed);

}

module.exports.help = {
    name: "strona",
	aliases: ["web"],
	description: "Wejdź na naszą stronę WWW",
	usage: "",
	category: "Basic",
}