//here the event starts
const {restartbot} = require("../../index")
module.exports = (client, error, id) => {
    console.log(` || <==> || [${String(new Date).split(" ", 5).join(" ")}] || <==> || Shard #${id} Errored || <==> ||`)
    setTimeout(async ()=>{
        restartbot()
    }, 3000)
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code!
  * @INFO
*/
