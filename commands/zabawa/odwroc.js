const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Odwrócenie`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(args.lenght < 1) return message.channel.send(embed.setDescription(`Błąd: Podaj pełny tekst do odwrócenia!`));
    embed.setDescription(args.join(' ').split('').reverse().join(''));
    message.channel.send(embed);

}

module.exports.help ={
    name: "odwroc",
	aliases: ["reverse"],
    description: "Odwróc tekst!",
	usage: "<tekst do odwrócenia>",
	category: "Zabawa",
}