const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Daj role`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(!message.member.hasPermissions("MANAGE_ROLES")) return embed.setDescription(bot.config.bladpermissji + `MANAGE_ROLES`), message.channel.send(embed);
    let forMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!forMember) return embed.setDescription("Błąd: Nie podano osoby \n Poprawne użycie tej komendy to: `a!dajrole <@wzmianka> <rola>`"), message.channel.send(embed);
    let rola = args.slice(1).join(" ");
    if(!rola) return embed.setDescription("Błąd: Nie podano roli \n Poprawne użycie tej komendy to: `a!dajrole <@wzmianka> <rola>`"), message.channel.send(embed);
    let grola = message.guild.roles.find(`name`, rola);
    if(!grola) return embed.setDescription("Błąd: Nie znalazłem takiej roli."), message.channel.send(embed);
    if(forMember.roles.has(grola.id)) return message.channel.send(embed.setDescription("Błąd: Ta osoba już ma tą role!"));
    forMember.addRole(grola.id);
    embed.addField(`${forMember.user.username} otrymał rolę`, `${grola.name}`);
    embed.addField(`Od `, message.author);
    message.channel.send(embed);
    message.delete();
}

module.exports.help = {
    name: "dajrole",
    aliases: ["addrole"],
    usage: "<@wzmianka> <rola>",
    description: "Nadaj rolę komendą",
    category: "Admin"
}