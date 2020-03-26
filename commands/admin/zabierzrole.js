const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Zabierz role`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(!message.member.hasPermission("MANAGE_ROLES") || message.author.id !== bot.config.ownerid) return message.channel.send(embed.setDescription(bot.config.bladpermissji + " `MANAGE_ROLES`"));
    let zMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!zMember) return message.channel.send(embed.setDescription("Błąd: Nie podano osoby do zabrania roli."));
    let rola = args.slice(1).join(" ");
    if(!rola) return message.channel.send(embed.setDescription("Błąd: Nie podano roli."));
    let grola = message.guild.roles.find(`name`, rola);
    if(!grola) return message.channel.send(embed.setDescription("Błąd: Nie znaleziono takiej roli."));
    if(!zMember.roles.has(grola.id)) return message.channel.send(embed.setDescription("Błąd: Ta osoba nie ma takiej roli."));
    zMember.removeRole(grola.id);
    embed.addField(`${zMember.user.username} stracił role`, grola.name);
    embed.addField(`Przez`, message.author);
    message.channel.send(embed);
    message.delete();
}

module.exports.help = {
    name: "zabierzrole",
    aliases: ["removerole"],
    usage: "<@wzmianka> <rola>",
    description: "Zabierz role komendą",
    category: "Admin",
}