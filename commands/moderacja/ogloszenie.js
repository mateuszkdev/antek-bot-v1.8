const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Ogłoszenie`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.channel.send(embed.setDescription("Podaj kanał na który chcesz wysłać ogłoszenie! `#przyklad kanalu`"));
    let tresc = args.slice(1).join(" ");
    if(!tresc) return message.channel.send(embed.setDescription("Podaj treść ogłoszenia. `a!ogloszenie <#kanał> <treść>`"));
    let wiadomosc = await kanal.send(embed.setDescription(tresc));
    wiadomosc.react('👍');
    wiadomosc.react('👎');
    
}

module.exports.help = {
    name: "ogloszenie",
    aliases: ["broadcast"],
    description: "Napisz ogłoszenie na wybranym kanale ",
    usage: "<#kanał> <treść>",
    category: "Moderacja",
}