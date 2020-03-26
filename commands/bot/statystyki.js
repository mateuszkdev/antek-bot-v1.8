const Discord = require("discord.js");
//const os = require('os');

module.exports.run = async (bot, message, args) => {

    let { version } = require("discord.js");
	let bicon = bot.user.displayAvatarURL;
    let sekundy = Math.floor(bot.uptime % 60)
    let dni = Math.floor((bot.uptime % 31536000) / 86400);
    let hours = Math.floor((bot.uptime / 3600) % 24);
    let mins = Math.floor((bot.uptime / 60) % 60);
    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor("Informacje o Bocie", bot.user.displayAvatarURL)
    .addField("Czas od uruchomienia", `${dni}d ${hours}g ${mins}m ${sekundy}s`)//  ${duration}`)
    .addField("Użytkownicy", `${bot.users.size}`)
    .addField("Serwery", `${bot.guilds.size}`)
    .addField("Kanały", `${bot.channels.size}`)
    .addField("Discord.js",`v.${version}`)
    .addField("Node.js", `v. ${process.version}`)
    .addField("Nazwa", `${bot.user.username}`)
    .addField("Utworzony", bot.user.createdAt)
    .addField("Właściciel", "**Mateusz**`#4711`")
	.setThumbnail(bicon)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "stats",
	aliases: ["statystyki"],
	description: "Zobacz informacje o bocie!",
	usage: "",
	category: "Bot",
}