const Discord = require("discord.js-selfbot-v13");
const {  language } = require("../../fonctions")

module.exports = {
  name: "backups",
  description: "backup Mode",
  run: async (client, message, args, db, prefix) => {
      message.edit(await language(client, `⛧ __**Xyla - Backup**__ ⛧
\`${prefix}backup create\` ➜ **crée une backup**
\`${prefix}backup load\` ➜ **charge une backup dans un serveur**
\`${prefix}backup delete\` ➜ **supprimer une backup (en dev)**
\`${prefix}backup list\` ➜ **la list de t'es backup (en dev)**`,
    `⛧ __**Xyla - Backup**__ ⛧
    \`${prefix}backup create\` ➜ **create a backup**
    \`${prefix}backup load\` ➜ **upload a save to a server**
    \`${prefix}backup delete\` ➜ **delete a backup (in dev)**
    \`${prefix}backup list\` ➜ **the list of your backup (en dev)**`
    ))
  }
}