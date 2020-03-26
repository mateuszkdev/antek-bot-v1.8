const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const fs = require("fs");
const { sep } = require("path");
const Discord = require("discord.js");
const update = fs.readFileSync('./whatsnew.txt', 'utf-8');
// const { succes, error, warning } = require("log-symbols");
const config = require("./config.js");

const bot = new Client();
bot.config = config;


["commands", "aliases"].forEach(x => bot[x] = new Collection());

const load = (dir = "./commands/") => {
	
	readdirSync(dir).forEach(dirs => {
		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));
		for (const file of commands) {
				const pull = require(`${dir}/${dirs}/${file}`);
				if (pull.help && typeof (pull.help.name) === "string" && typeof (pull.help.category) === "string") {
					if (bot.commands.get(pull.help.name)) return console.warn(`Za duzo komend ma taka sama nazwe. ${pull.help.name}.`);
					bot.commands.set(pull.help.name, pull);
					console.log(`Zaladowano komende ${pull.help.name}`);
				} else {
					console.log(` Blad. Ladowania komendy w ${dir}${dirs}. Masz blad nazyw help.name albo help.name nie jest w typie string. Ewentualnie brakuje cos w help.category albo help.category nie jest w typie string.`);
					continue;
				}
				if (pull.help.aliases.forEach(alias => {
					if (bot.aliases.get(alias)) return console.warn(`dwie komendy lub wiecej, maja takie samo aliases!: ${alias}`);
					bot.aliases.set(alias, pull.help.name);
				}));
		}
	});
	
};

load();

bot.on("ready", () => {
	console.log("Zalogowano!");
	bot.user.setGame("a!help");
});

bot.on("message", async message => {
	
	const prefix = bot.config.prefix;
	// const prefix = "a!";
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
	
	let command;
	
	if (message.author.bot || !message.guild) return;
	
	if (!message.member) message.member = await message.guild.fetchMember(message.author);
	
	if (!message.content.startsWith(prefix)) return;
	
	if (cmd.length === 0) message.channel.send("`a!` to **prefix**! \n Wpisz `a!help`");
	if (bot.commands.has(cmd)) command = bot.commands.get(cmd);
	else if (bot.aliases.has(cmd)) command = bot.commands.get(bot.aliases.get(cmd));
	
	if (command) command.run(bot, message, args);
});

bot.login(bot.config.token).catch(console.error());