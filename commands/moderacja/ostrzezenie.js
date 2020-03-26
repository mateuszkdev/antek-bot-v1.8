const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Ostrzeżenie`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(!message.member.hasPermission("MANAGE_MESSAGES" || message.author.id !== `${bot.config.ownerid}`)) return message.channel.send(embed.setDescription(bot.config.bladpermissji + "` MANAGE_MESSAGES`"));
    let wmember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let powod = args.slice(1).join(" ");
    if(!wmember) return message.channel.send(embed.setDescription("Błąd: Nie podano osoby do ostrzeżenia."));
    if(!powod) return message.channel.send(embed.setDescription("Błąd: Nie podano powodu ostrzeżenia."));
    embed.addField("Ostrzeżenie do", wmember);
    embed.addField("Powód", powod);
    message.channel.send(embed);
    message.delete();
}

module.exports.help = {
    name: "ostrzezenie",
    aliases: ["warn"],
    description: "Ostrzeż osobe jeżli na to zasłużyła.",
    usage: "<@wzmianka> <powdód>",
    category: "Moderacja",
}