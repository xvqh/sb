const fs = require('fs');
const path = require('path');
const { Client, Collection } = require('discord.js-selfbot-v13');
const config = require("./config")

const client = new Client({ checkUpdate: false, autoRedeemNitro: false, ws: { properties: { os: 'Linux', browser: 'Discord Client', release_channel: 'stable', client_version: '1.0.9011', os_version: '10.0.22621', os_arch: 'x64', system_locale: 'en-US', client_build_number: 175517, native_build_number: 29584, client_event_source: null, design_id: 0, } } });

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

  fs.readdirSync("./events/").forEach(dirs => {
    const events = fs.readdirSync(`./events/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evt = require(`./events/${dirs}/${event}`);
      if (evt.once) {
        client.once(evt.name, (...args) => evt.run(...args, client));
        console.log(`> event charger avec succès ${evt.name}`);
      } else {
        client.on(evt.name, (...args) => evt.run(...args, client));
        console.log(`> event charger avec succès ${evt.name}`);
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