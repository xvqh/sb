// command to get profile picture
const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "help",
  description: "Menu Help",
  run: async (client, message, args, db, prefix) => {

    message.edit(await language(client, `
⛧ __**Xyla**__ ⛧
*Vaut mieux être seul que mal accompagné.*
\`${prefix}help\` ➜ **Menu d'aide (ce menu)**
\`${prefix}status\` ➜ **Commande de statuts**
\`${prefix}utility\` ➜ **Commandes d'utilitaire**
\`${prefix}tools\` ➜ **Commandes de tools**
\`${prefix}raid\` ➜ **Commandes de raid**
\`${prefix}mod\` ➜ **Commandes de modération**
\`${prefix}backups\` ➜ **Commandes backup**
\`${prefix}fun\` ➜ **Commandes de fun**
\`${prefix}voice\` ➜ **Commandes de voice**
\`${prefix}settings\` ➜ **Commandes de paramètres**`
,`⛧ __**Xyla**__ ⛧
*Better to be alone than in bad company.*
\`${prefix}help\` ➜ **Help menu (this menu)**
\`${prefix}status\` ➜ **Status commands**
\`${prefix}utility\` ➜ **Utility commands**
\`${prefix}tools\` ➜ **Tools commands**
\`${prefix}raid\` ➜ **Raid commands**
\`${prefix}mod\` ➜ **Moderation commands**
\`${prefix}fun\` ➜ **Fun commands**
\`${prefix}voice\` ➜ **Voice commands**
\`${prefix}settings\` ➜ **Parameter commands**`))
  }
}; 