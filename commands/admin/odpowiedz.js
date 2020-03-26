const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Odpowiedź`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(!message.member.hasPermission("MANAGE_MESSAGES") || message.author.id !== bot.config.ownerid) return message.channel.send(embed.setDescription(bot.config.bladpermissji + " `MANAGE_MESSAGES`"));
    let mUser = message.mentions.users.first() || message.guild.users.get(args[0]);
    let odp = args.slice(1).join(" ");
    if(!mUser) return message.channel.send(embed.setDescription("Błąd: Nie oznaczono osoby której się odpowiada."));
    if(!odp) return message.channel.send(embed.setDescription("Błąd: Nie podano odpowiedzi."));
    message.delete();
    embed.setAuthor(`Odpowiedż dla ${mUser.username}`, bot.user.displayAvatarURL);
    embed.setDescription(odp);
    let wiadomosc = await message.channel.send(embed);
    wiadomosc.react('👍');
    wiadomosc.react('👎');

}

module.exports.help = {
    name: "odpowiedz",
    aliases: ["odp", "answer"],
    description: "Odpowiedz na pytanie zadane przez membera na kanale `propozycje`",
    usage: "<treść>",
    category: "Admin",
}