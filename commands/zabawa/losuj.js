const Discord = require("discord.js");
var blokada = 1;
module.exports.run = (bot, message, args) => {

    let powod = args.slice(0).join(" ");
    if (powod && message.author.id == bot.config.ownerid) {
        if (powod == "on"){
            blokada = 1;
            const bt = new Discord.RichEmbed()
            .setColor(`${bot.config.kolor}`)
            .setAuthor("Mini Lotto Game")
            .addField("Blokada ustawiona na: ", "false")
            .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
            .setTimestamp();
            message.channel.send(bt);
        } else if (powod == "off"){
            blokada = 0;
            const bf = new Discord.RichEmbed()
            .setColor(`${bot.config.kolor}`)
            .setAuthor("Mini Lotto Game")
            .addField("Blokada ustawiona na: ", "true")
            .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
            .setTimestamp();
            message.channel.send(bf);
        } else if(powod == "eval"){
            message.channel.send(blokada);
        } else {
            message.channel.send("> No nie, tak to nie zadziala.");
        }
    } else {

    if (blokada === 1){
    let wynik = [":poop:", ":love_letter:", ":tooth:", ":bone:", ":baby:", ":fox:", ":cat:", ":wolf:", ":spider:", ":spider_web:", ":microbe:", ":apple:", ":saxophone:", ":redcar:", ":deskopt:", ":computer:", ":dollar:", ":pick:", ":gun:", ":key:", ":8ball:", ":rose:", ":brain:", ":robot:", ":skull:", ":pirate_flag:"];

    let rodzaj = ["Zwykły", "Rzadki", "Epicki", "Legendarny", "Zwykły", "Zwykły", "Zwykły", "Zwykły","Rzadki","Magiczny","Zwykły", "Zwykły", "Zwykły", "Zwykły","Rzadki","Rzadki","Rzadki","Rzadki","Rzadki","Rzadki"];

    let wynik1 = Math.floor((Math.random() * wynik.length));
    let rodzaj1 = Math.floor((Math.random() * rodzaj.length));

    var cena;

    switch(rodzaj[rodzaj1]){
        case "Zwykły":  cena = Math.floor((Math.random() * 100));
        break;
        case "Rzadki":  cena = Math.floor((Math.random() * 450));
        break;
        case "Epicki":  cena = Math.floor((Math.random() * 700));
        break;
        case "Legendarny": cena = Math.floor((Math.random() * 2000));
        break;
        case "Magiczny": cena = Math.floor((Math.random() * 1856));
        break;

        default: message.channel.send("> Ops.. Coś poszło bardzo nie tak.");
    }

    const embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor("Mini Lotto Game")
    .addField("Wylosowano:", wynik[wynik1])
    .addField("Rodzaj","**"+ rodzaj[rodzaj1]+"**")
    .addField("Cena", "**" + cena+" PLN**")
    .setFooter(`Wykonene przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed);
    } else if (blokada === 0){
        const newembed = new Discord.RichEmbed()
        .setColor(`${bot.config.kolor}`)
        .setAuthor("Mini Lotto Game")
        .addField("Gra zablokowana", "Spróbuj ponownie za jakiś czas.")
        .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp();
        message.channel.send(newembed);
    } else {
        message.channel.send("> Coś poszło bardzo nie tak!");
    }
}
}

module.exports.help = {
	name: "losuj",
	aliases: ["random"],
	description: "Wylosuj randomowe emoji, rodzaj oraz cene",
	usage: "",
	category: "Zabawa",
};