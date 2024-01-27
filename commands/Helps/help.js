const Discord = require("discord.js-selfbot-v13");
const config = require("../../config")
const prefix = config.prefix
module.exports = {
  name: "help",
  description: "Menu Help",
  run: async (client, message, args) => {

    message.edit(`
⛧ __**Xyla**__ ⛧
*Vaut mieux être seul que mal accompagné.*
\`${prefix}help\` ➜ **Menu d'aide (ce menu)**
\`${prefix}backups\` ➜ **Commandes backup**
\`${prefix}fun\` ➜ **Commandes de fun**`
    )
  }
}; 
