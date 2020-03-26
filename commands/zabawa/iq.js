const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let iq = Math.floor(Math.random()*200);
    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`IQ ${message.author.tag}`, bot.user.displayAvatarURL)
    .setDescription(`Twój poziom **IQ** wynosi teraz: **` + iq + ` IQ**`)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed);

}

module.exports.help = {
    name: "iq",
    aliases: [""],
    description: "Sprawdź swoje IQ (losowe)",
    usage: "",
    category: "Zabawa",
}