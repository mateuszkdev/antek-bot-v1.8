const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let wartosc = Math.floor(Math.random() * 500);
    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Cena`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    let omember = message.mentions.users.first() || message.member;
    message.channel.send(embed.setDescription(`**${omember}** warty(a) jest **`+wartosc+" ZŁ**")); 
};

module.exports.help = {
    name: "cena",
	aliases: ["price"],
	description: "Sprawdź cenę użytkownika!",
	usage: "<@wzmianka>",
	category: "Zabawa",
};