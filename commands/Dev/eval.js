const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== bot.config.ownerid) return;  

    const command = args.slice(0).join(" ");
    message.channel.send(
    `\`\`\`js
    ${eval(command)}
    \`\`\``);
}

module.exports.help = {
    name: "eval",
    aliases: [""],
    description: "",
    usage: "",
    category: "Dev",
}