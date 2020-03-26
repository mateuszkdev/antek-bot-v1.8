const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let d = new Date();
    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Zgłoszenie`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    let zUser = message.mentions.users.first() || message.guild.members.get(args[0]);
    let powod = args.slice(1).join(" ");
    if(!zUser) return message.channel.send(embed.setDescription(`Błąd: Nie podano zgłaszanego użytkownika.`));
    if(!powod) return message.channel.send(embed.setDescription(`Błąd: Nie podano powodu zgłoszenia.`));
    let kanal = message.guild.channels.find(`name`, `zgloszenia`);
    if(!kanal) return message.channel.send(embed.setDescription("Błąd: Nie znaleziono kanału do zgłoszeń `zgloszenia`"));
    var datestring = ("0" + d.getDate()).slice(-2) + "." + ("0"+(d.getMonth()+1)).slice(-2) + "." +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    embed.addField("Zgłoszony", zUser.tag);
    embed.addField("Zgłoszony przez", message.author.tag);
    embed.addField("Czasu", datestring);
    embed.setThumbnail(zUser.displayAvatarURL);
    embed.addField("Powód", powod);
    kanal.send(embed);
    message.delete();

}

module.exports.help = {
    name: "zglos",
    aliases: ["report"],
    description: "Zgłoś użytkownika administracji",
    usage: "<@wzmianka> <powód>",
    category: "Narzedzia",
}