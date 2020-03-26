const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Wyrzuć`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(!message.member.hasPermission("KICK_MEMBERS" || message.author.id !== `${bot.config.ownerid}`)) return message.channel.send(embed.setDescription(bladpermissji + ` KICK_MEMBERS`));
    let kmember = message.mentions.members.first();
    if(!kmember) return message.channel.send(embed.setDescription("Błąd: Nie podano osoby do wyrzucenia `a!wyrzuc <@wzmianka> (powód)`"));
    if(!kmember.kickable) return message.channel.send(embed.setDescription("Błąd: Nie mogę wyrzucić tej osoby."));
    if(!kmember.id === bot.config.ownerid) return message.channel.send(embed.setDescription("Błąd: Nie mogę wyrzucić mojego właściciela."));
    if(kmember.id === message.author.id) return message.channel.send(embed.setDescription("Błąd: Nie możesz wyrzucić sam siebie."));
    let powod = args.slice(1).join(" ");
    if(!powod){
        pow = "`Nie podano powodu.`";
    } else {
        pow = powod;
    }
    kmember.kick(pow).catch(error => message.channel.send(embed.setDescription(`Błąd: Noe mogę wyrzucić tej osoby, poniważ: ${error}`)));
    embed.addField("Wyrzucony", kmember);
    embed.addField("Przez", message.author);
    embed.addField("Powód", pow);
    message.channel.send(embed);
}

module.exports.help = {
    name: "wyrzuc",
    aliases: ["kick"],
    description: "Wyrzuć użytkownika z serwera.",
    usage: "<@wzmianka> (powód)",
    category: "Moderacja",
}