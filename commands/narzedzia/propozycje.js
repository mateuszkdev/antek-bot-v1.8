const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Propozycja`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    let kanal = message.guild.channels.find(`name`, `propozycje`);
    if(!kanal) return message.channel.send(embed.setDescription("Błąd: Nie znalazłem kanału `propozycje`"));
    let propozycja = args.slice(0).join(" ");
    if(!propozycja) return message.channel.send(embed.setDescription("Błąd: Nie podano propozycji."));
    embed.addField("Od", message.author);
    embed.addField("Trześć", propozycja);
    kanal.send(embed);
    message.delete();

}

module.exports.help = {
    name: "propozycja",
	aliases: ["proponuj"],
	description: "Wyślij propozycje administracji na kanal `poropozycje`!",
	usage: "<treść>",
	category: "Narzedzia",
}