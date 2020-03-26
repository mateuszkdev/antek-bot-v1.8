const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Ban`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(!message.member.hasPermission("BAN_MEMBERS" || message.author.id !== `${bot.config.ownerid}`)) return message.channel.send(embed.setDescription(bot.config.bladpermissji + `BAN_MEMBERS`));
    let banmember = message.mentions.members.first();
    if(!banmember) return message.channel.send(embed.setDescription("Błąd: Nie podano osoby \n Poprawne użycie tej komendy to `a!zbanuj <@wzmianka> (powód)`"));
    if(banmember.id === bot.config.ownerid) return message.channel.send(embed.setDescription("Błąd: Nie mogę zbanować mojego właściciela."));
    if(!banmember.bannable) return message.channel.send(embed.setDescription("Nie mogę zbanować tej osoby!"));
    if(banmember.id === message.author.id) return message.channel.send(embed.setDescription("Błąd: Nie możesz zbanować sam siebie!"));
    let powod = args.slice(1).join(" ");
    if(!powod){
        pow = "`Nie podano powodu.`";
    } else {
        pow = powod;
    }
    banmember.ban(pow).catch(error => message.catch.send(embed.setDescription(`Błąd: Nie mogę zbanować tej osoby: ${error}`)));
    embed.addField("Zbanowany", banmember);
    embed.addField("Przez", message.author);
    embed.addField("Powód", pow);
    message.channel.send(embed);
}

module.exports.help = {
    name: "zbanuj",
    aliases: ["ban"],
    description: "Zbanuj użytkownika.",
    usage: "<@wzmianka> (powód)",
    category: "Moderacja",
}