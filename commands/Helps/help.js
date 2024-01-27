// command to get profile picture
const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "help",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(`
⛧ __**Xyla**__ ⛧
*Vaut mieux être seul que mal accompagné.*
\`${prefix}help\` ➜ **Menu d'aide (ce menu)**
\`${prefix}backups\` ➜ **Commandes backup**
\`${prefix}fun\` ➜ **Commandes de fun**`
    )
  }
}; 
