const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const d = new Date();
    const miesiac = d.getMonth();
    const dzien = d.getDay();

    let miesiacname;
    switch(miesiac){
        case 0: miesiacname = "Styczeń";
            break;
        case 1: miesiacname = "Luty";
            break;
        case 2: miesiacname = "Marzec";
            break;
        case 3: miesiacname = "Kwiecień";
            break;
        case 4: miesiacname = "Maj";
            break;
        case 5: miesiacname = "Czerwiec";
            break;
        case 6: miesiacname = "Lipiec";
            break;
        case 7: miesiacname = "Sierpień";
            break;
        case 8: miesiacname = "Wrzesień";
            break;
        case 9: miesiacname = "Październik";
            break;
        case 10: miesiacname = "Listopad";
            break;
        case 11: miesiacname = "Grudzień";

        default: miesiacname = "Błąd switcha";
    }

    let poraroku;
    switch(miesiac){
        case 0: case 1: case 2:
            poraroku = "Zima";
            break;
        case 3: case 4: case 5:
            poraroku = "Wiosna";
            break;
        case 6: case 7: case 8:
            poraroku = "Lato";
            break;
        case 9: case 10: case 11:
            poraroku = "Jesień";
            break;
        default: poraroku = "Błąd switcha";
    }

    let dziennazwa;
    switch(dzien){
        case 1: dziennazwa = "Poniedziałek";
            break;
        case 2: dziennazwa = "wtorek";
            break;
        case 3: dziennazwa = "Środa";
            break;
        case 4: dziennazwa = "Czwartek";
            break;
        case 5: dziennazwa = "Piątek";
            break;
        case 6: dziennazwa = "Sobota";
            break;
        case 7: dziennazwa = "Niedziela";
            break;
        default: dziennazwa = "Błąd switcha";
    }
    var datestring = ("0" + d.getDate()).slice(-2) + "." + ("0"+(d.getMonth()+1)).slice(-2) + "." +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Dziś`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp()
    .addField("Dzień", dziennazwa)
    .addField("Miesiąc", miesiacname)
    .addField("Pora roku", poraroku)
    .addField("Data+Godzina", datestring)
    .addField("Numer dnia tygodnia", dzien);
    message.channel.send(embed);
}

module.exports.help = {
    name: "dzis",
    aliases: ["today"],
    description: "Sprawdź informacje o dzisiejszym dniu.",
    usage: "",
    category: "Zabawa",
}