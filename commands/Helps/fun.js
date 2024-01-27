const Discord = require("discord.js-selfbot-v13");
const { language } = require("../../fonctions");

module.exports = {
  name: "fun",
  description: "Menu fun",
  run: async (client, message, db, args, prefix) => {
    try{

        message.edit(await language(client, `
⛧ __**Xyla - Fun**__ ⛧
\`${prefix}say <@user> [message]\` ➜ **Dire une chose sous l'identité d'autrui (webhook)**
\`${prefix}thot <@user>\` ➜ **Note le pourçentage de saloperie d'autrui**
\`${prefix}love <@user>\` ➜ **Message animé**
\`${prefix}nitro\` ➜ **Drop de faux nitro**
\`${prefix}noadd [delete]\` ➜ **Empêche les gens d'ajouter des personnes au groupe**
\`${prefix}noleave [delete]\` ➜ **Ré-ajoute les gens qui quittent le groupe (vos amis seulement)**
\`${prefix}add\` ➜ **Envoi ton lien pour t'ajouter**
\`${prefix}robuser <@user>\` ➜ **Vole le profil d'un membre**`,
        
        `⛧ __**Xyla - Fun**__ ⛧
\`${prefix}say <@user> [message]\` ➜ **Saying something under someone else's identity (webhook)**
\`${prefix}thot <@user>\` ➜ **Note the percentage of other people's filth**
\`${prefix}love <@user>\` ➜ **Animated message**
\`${prefix}nitro\` ➜ **Send fakes nitros**
\`${prefix}noadd [delete]\` ➜ **Prevents people from adding people to the group**
\`${prefix}noleave [delete]\` ➜ **Re-add people who leave the group (your friends only)**
\`${prefix}add\` ➜ **Send your link to add yourself**
\`${prefix}robuser <@user>\` ➜ **Steal a member's profile**`
        ))

      }
        catch(e){}
    }
}