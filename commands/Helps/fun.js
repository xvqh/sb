const Discord = require("discord.js-selfbot-v13");
const config = require("../../config")
const prefix = config.prefix
module.exports = {
  name: "fun",
  description: "Menu fun",
  run: async (client, message, args) => {
    try{
        message.edit(`
⛧ __**Xyla - Fun**__ ⛧
\`${prefix}add\` ➜ **Envoi ton lien pour t'ajouter**
\`${prefix}robuser <@user>\` ➜ **Vole le profil d'un membre**`
        )
      }
        catch(e){}
    }
}
