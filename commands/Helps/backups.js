const Discord = require("discord.js-selfbot-v13");
const config = require("../../config")
const prefix = config.prefix
module.exports = {
  name: "backups",
  description: "backup Mode",
  run: async (client, message, args) => {
      message.edit(`⛧ __**Xyla - Backup**__ ⛧
\`${prefix}backup create\` ➜ **crée une backup**
\`${prefix}backup load\` ➜ **charge une backup dans un serveur**
\`${prefix}backup delete\` ➜ **supprimer une backup (en dev)**
\`${prefix}backup list\` ➜ **la list de t'es backup (en dev)**`
    )
  }
}
