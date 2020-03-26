const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Pytanie`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();

    if(!args[2]) return message.channel.send(embed.setDescription("Błąd: Podaj pełne pytanie (zdanie, minimum z wyrazy.)"));
    let replies = ["Tak", "Nie", "Nie wiem..", "Zapytaj później!", "Może..", "Może tak.. a może nie..", "1945!","Oczywiście.. że nie!", "Oczywiście że tak!", "W twoich snach", "nwm", "No chyba nie", "XD", "Chciał byś", "Taaak", "Jasne", "Jutro", "Za miesiąc", "Chyba gałe", "Twój kot mi to powiedział", "Jak mi powiesz ile masz lat...", "Jestem", "Jak mi zrobisz pierogi <3", "To zależy od stanu pogody!", "Jak skończysz 18 lat bobasku ty mój <3", "Boli cię głowa? Może masz gorączke! Dzwonie po egzorcyste.", "666", "N I E", "T A K", "Życie.", "Mam focha od teraz.", "Kocham ci||eń - ha a co myślałeś, że kocham ciebie? HA||", "Eluwina jesieniaro!", "koronavirus z Wuhan ci powie!!!!!", "Weź kup mi nowy RAM <3 wyśle ci `lód.png`"];

    let result = Math.floor((Math.random() * replies.length));
    let pytanie = args.slice(0).join(" ");
    embed.addField("Pytanie", pytanie);
    embed.addField("Odpowiedź", replies[result]);
    message.channel.send(embed);

}

module.exports.help = {
    name: "pytanie",
    aliases: ["8ball", "question"],
    description: "Spytaj się o coś bota, może odpowie! :D",
    usage: "<treść pytania>",
    category: "Zabawa",
}