const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const status = {
        online: "Online",
        idle: "Zaraz wracam",
        dnd: "Nie przeszkadzać",
        offline: "Offline/Niewidzialny"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    ifbot = ":white_check_mark: Tak";
  } else {
    ifbot = ":no_entry_sign: Nie";
  }

            let embed = new Discord.RichEmbed()
                .setAuthor("Informacje o użytkoniku", bot.user.displayAvatarURL)
                .setThumbnail((target.displayAvatarURL))
                .setColor(`${bot.config.kolor}`)
                .addField("Pełna nazwa", `${member.user.tag}`)
                .addField("ID", member.user.id)
                .addField("Pseudonim", `${member.nickname !== null ? ` Pseudonim: ${member.nickname}` : "Brak"}`)
                .addField("Bot", `${ifbot}`)
                .addField("Status", `${status[member.user.presence.status]}`)
                .addField("Gra w", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Nie gra w nic."}`)
                .addField("Role", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Brak ról"}`)
                .addField("Konto od", member.user.createdAt)
                .setFooter(`Wykonene przez ${message.author.tag}`, message.author.displayAvatarURL)
                .setTimestamp()
    
            message.channel.send(embed);
    }


module.exports.help = {
	name: "ktoto",
	aliases: ["whois"],
	description: "Zobacz informacje o użytkowniku!",
	usage: "(@wzmianka)",
	category: "Narzedzia",
}