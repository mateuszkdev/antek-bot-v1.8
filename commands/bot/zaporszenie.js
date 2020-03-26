const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Zaproszenie`, bot.user.displayAvatarURL)
    .setTitle(`[ Link ]`)
    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=544180497522098177&permissions=8&scope=bot`)
    .setDescription(`Dodaj ${bot.user.username} na swój serwer i ciesz sie z jego funkcji!`)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp()
    .setThumbnail(bot.user.displayAvatarURL);
    message.channel.send(embed);

}

module.exports.help = {
    name: "zaproszenie",
    aliases: ["invite"],
    description: "Dodaj bota na swój serwer",
    usage: "",
    category: "Bot",
}