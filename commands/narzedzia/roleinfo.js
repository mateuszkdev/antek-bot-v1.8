const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Roleinfo`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    let rola = args.slice(0).join(" ");
    if(!rola) return message.channel.send(embed.setDescription("Błąd: Nie podano roli to sprawdzenia inforamcji."));
    let grola = message.guild.roles.find(`name`, rola);
    if(!grola) return message.channel.send(embed.setDescription("Błąd: Nie znalazłem takiej roli."));
    const status = {
        false: "Nie",
        true: "Tak"
    }
    embed.addField("Nazwa roli & ID", grola.name +"\n"+ grola.id);
    embed.addField("Wzmianka", `<@${grola.id}>`);
    embed.addField("Pozycja", grola.position);
    embed.addField("Kolor", grola.hexColor);
    embed.addField("Użytkowników", grola.members.size);
    embed.addField("Wyświetlana oddzielnie", status[grola.hoist]);
    embed.addField("Zarządzana", status[grola.managed]);
    embed.addField("Wzmianka", status[grola.mentionable]);
    message.channel.send(embed);

}

module.exports.help = {
    name: "rola",
	aliases: ["roleinfo"],
	description: "Zobacz informacje o roli!",
	usage: "<rola>",
	category: "Narzedzia",
}