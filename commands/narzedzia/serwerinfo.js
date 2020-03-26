const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    const verlvl = {
        0: "Brak",
        1: "Niski",
        2: "Średni",
        3: "(╯°□°）╯︵ ┻━┻",
        4: "(ノಠ益ಠ)ノ彡┻━┻",
    }

    let inline = true;
    let sicon = message.guild.iconURL;
    const embed = new Discord.RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor("Serwerinfo", bot.user.displayAvatarURL)
    .setThumbnail(sicon)
    .addField("Nazwa", message.guild.name)
    .addField("ID", message.guild.id)
    .addField("Właściciel", message.guild.owner)
    .addField("Region", message.guild.region)
    .addField("Poziom weryfikacji", verlvl[message.guild.verificationLevel])
    .addField("Użytkownicy", `${message.guild.memberCount}`)
    .addField("Role", message.guild.roles.size)
    .addField("Kanały", message.guild.channels.size)
    .addField("Dołączono", message.member.joinedAt)
    .addField("Utworzono", `${message.guild.createdAt}`)
    .setFooter(`Wykonene przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed);
}

module.exports.help = {
    name: "serwerinfo",
	aliases: ["serverinfo"],
	description: "Zobacz informacje o serwerze!",
	usage: "",
	category: "Narzedzia",
}