const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let idmember = message.mentions.members.first() || message.member;
    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`${idmember.user.tag} ID`, bot.user.displayAvatarURL)
    .setDescription(`${idmember.id}`)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "id",
    aliases: ["identyfikator"],
    description: "Zobacz ID użytkownika",
    usage: "(@wzmianka)",
    category: "Narzedzia",
}