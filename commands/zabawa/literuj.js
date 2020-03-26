const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Literowanie`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(args.lenght < 1) return message.channel.send(embed.setDescription(`Błąd: Podaj pełny tekst do przeliterowania!`));
    embed.setDescription(args.join(' ').split('').join(' '));
    message.channel.send(embed);

}

module.exports.help ={
    name: "literuj",
	aliases: ["lettering"],
    description: "Przeliteruj tekst!",
	usage: "<tekst do przeliterowania>",
	category: "Zabawa",
}