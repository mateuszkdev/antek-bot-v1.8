const { readdirSync } = require("fs");
const { RichEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let embed = new RichEmbed()
    .setColor(`${bot.config.kolor}`)
    .setAuthor(`Pomoc ${bot.user.username}`, bot.user.displayAvatarURL)
    .setFooter(`Wykonane przez ${message.author.tag}`, message.author.displayAvatarURL)
    .setTimestamp();
    if(args[0]){
        let command = args[0];
        let cmd;
        if(bot.commands.has(command)){
            cmd = bot.commands.get(command);
        }
        else if (bot.aliases.has(command)){
            cmd = bot.commands.get(bot.aliases.get(command));
        }
        if(!cmd) return message.channel.send(embed.setDescription("Błąd: Nie mam takiej komendy! \n Wpisz `a!pomoc` aby uzyskać więcej informacji."));
        command = cmd.help;
        embed.setTitle(`Pomoc komendy: ${command.name.slice(0, 1).toUpperCase()+command.name.slice(1)}`);
        embed.setDescription([
			`**Komenda: ** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}`,
			`**Opis: ** ${command.description || "Brak opisu"}`,
			`**Uzycie: ** ${command.usage ? `\`${bot.config.prefix}${command.name} ${command.usage}\`` : "Brak uzycia"} `,
			`**Inne nazwy: ** ${command.aliases ? command.aliases.join(", ") : "Brak"}`,
			`**Kategoria: ** ${command.category ? command.category : "Inne"}`,
        ].join("\n"))
        return message.channel.send(embed);
    }
	const categories = readdirSync("./commands/");
	embed.setDescription([
        `Prefix bota **${bot.user.username}**: **${bot.config.prefix}**`,
        "Uwaga! `< >` oznacza wymagane, natomiast `( )` jest opcjonalne.",
        "Wpisz `a!pomoc <komenda>` aby uzyskać więcej informacji o poleceniu.",
	].join("\n"));
	categories.forEach(category => {
		const dir = bot.commands.filter(c => c.help.category.toLowerCase() === category.toLowerCase());
		const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);

		try {
			if (dir.size === 0) return;
			if (bot.config.owners.includes(message.author.id)) embed.addField(`❯ ${capitalise}`, dir.map(c => `\`${c.help.name}\``).join(", "));
			else if (category !== "Dev") embed.addField(`❯ ${capitalise}`, dir.map(c => `\`${c.help.name}\``).join(", "));
		}
		catch (e) {
			console.log(e);
		}
	});
	return message.channel.send(embed);
};

module.exports.help = {
    name: "pomoc",
    aliases: ["help", "h"],
    description: "Potrzebujesz pomocy? Zarknij tutaj!",
    usage: "s",
    category: "Podstawowe",
}