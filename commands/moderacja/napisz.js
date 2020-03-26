const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Napisz`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(!message.member.hasPermission("MANAGE_MESSAGE" || message.author.id !== `${bot.config.ownerid}`)) return message.channel.send(embed.setDescription(bot.config.bladpermissji + " `MANAGE_MESSAGES`"));
    let wiadomosc = args.join(" ");
    if(!wiadomosc) return message.channel.send(embed.setDescription("Błąd: Nie podano wiadomości."));
    message.delete();
    embed.setDescription(wiadomosc);
    embed.setFooter(``);
    message.channel.send(embed);
}

module.exports.help = {
    name: "napisz",
    aliases: ["say"],
    description: "Napisz wiadomość (embed) poprzez bota.",
    usage: "<wiadomość>",
    category: "Moderacja",
}