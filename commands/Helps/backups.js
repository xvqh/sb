const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "backups",
  description: "backup Mode",
  run: async (client, message, args, db, prefix) => {
      message.edit(await language(client, `⛧ __**Xyla - Backup**__ ⛧
\`${prefix}backup create\` ➜ **crée une backup**
\`${prefix}backup load\` ➜ **charge une backup dans un serveur**
\`${prefix}backup delete\` ➜ **supprimer une backup (en dev)**
\`${prefix}backup list\` ➜ **la list de t'es backup (en dev)**`
    ))
  }
}
