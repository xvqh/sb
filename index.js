const fs = require('fs');
const path = require('path');
const { Client, Collection } = require('discord.js-selfbot-v13');
const config = require("./config")

const client = new Client({ checkUpdate: false});

client.on("ready", () => {
  console.log(`${client.user.name} est bien en ligne`)
})

  client.snipe = new Map()
  client.commands = new Collection();

  fs.readdirSync("./commands/").forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const folder = require(`./commands/${dirs}/${file}`);
      client.commands.set(folder.name, folder);
      console.log(`> commande charger avec succès ${folder.name} ${dirs}`);
    }
  });

client.on("messageCreate", async message => {
  if (message.author.id !== client.user.id) return
  
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);

  if (command) {
    try {
      await command.run(client, message, args);
    } catch (error) {
      console.log(error);
    }
  }
});

client.login(config.token)
process.on('unhandledRejection', (reason, promise) => {
  console.log('----- Unhandled Rejection at -----');
  console.log(promise);
  console.log('----- Reason -----');
  console.log(reason);
});
