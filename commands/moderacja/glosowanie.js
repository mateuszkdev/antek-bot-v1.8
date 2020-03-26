const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Głosowanie`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(!message.member.hasPermission("MANAGE_MESSAGES" || message.author.id !== `${bot.config.ownerid}`)) return message.channel.send(embed.setDescription(bot.config.bladpermissji + " `MANAGE_MESSAGES`"));
    let kanal = message.mentions.channels.first();
    let tresc = args.slice(1).join(" ");
    if(!kanal) return message.channel.send(embed.setDescription(`Błąd: Nie znaleziono takiego kanału.`));
    if(!tresc) return message.channel.send(embed.setDescription("Błąd: Nie podano treści."));
    //const wiadomosc = await embed;
    message.delete();
    embed.setDescription(tresc);
    let wiadomosc = await kanal.send(embed);
    wiadomosc.react('👍');
    wiadomosc.react('👎');

}

module.exports.help = {
    name: "glosowanie",
    aliases: ["vote"],
    description: "Stwórz głosowanie na dowolny temat na wybranym kanale.",
    usage: "<kanał> <teść>",
    category: "Moderacja",
}