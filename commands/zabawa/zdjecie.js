const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Zdjęcie`, bot.user.displayAvatarURL)
    .setDescription(`${user}`)
    .setImage(user.displayAvatarURL)
    .setTitle(`[ Link ]`)
    .setURL(user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "zdjecie",
    aliases: ["avatar"],
    description: "Zobacz zdjęcie użytkownika!",
    usage: "(@wzmianka)",
    category: "Zabawa",
}