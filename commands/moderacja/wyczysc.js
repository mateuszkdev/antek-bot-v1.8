const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Wyczyść`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed.setDescription(bot.config.bladpermissji + ` MANAGE_MESSAGES`));
    let ilosc = args.slice(0).join(' ');
    if(!ilosc) return message.channel.send(embed.setDescription("Błąd: Nie podano ilości wiadomości do usunięcia."));
    if(!ilosc > 0) return message.channel.send(embed.setDescription("Błąd: Podaj wartość większą od zera!"));
    message.channel.bulkDelete(ilosc).then(()=>{
        message.channel.send(`> Usunięto **${ilosc}** wiadomości.`).then(message.delete(5000));
    });
}
module.exports.help = {
    name: "wyczysc",
    aliases: ["clear"],
    description: "Wyczyść chat z wiadomości.",
    usage: "<ilość wiadomości do usunięcia>",
    category: "Moderacja",
}