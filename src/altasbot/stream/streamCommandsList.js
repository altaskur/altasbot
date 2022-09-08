require("dotenv").config();
const socketInit = require("../../socketServer/socketInit.js");

function sendSocket(data) {
  const connection = socketInit.getConnection();
  connection.sendEvent("message", data);
}

function streamCommandsList(commands) {
  commands.addCommands("!stream", (client, target, ctx, message, self) => {
    client.say(target, `/me MrDestructoid Hola ${ctx.username}!`);
  });

  commands.addCommands("!emotesOn", (client, target, ctx, message, self) => {
    this.client
      .emoteonly(process.env.CHANNEL_NAME)
      .then(() => {
        sendSocket({
          data: `Activado modo sólo emotes`,
        });
      })
      .catch((err) => {
        this.client.emoteonlyoff(process.env.CHANNEL_NAME).catch((err) => {
          console.error(err);
        });
      });
  });
}

module.exports = { streamCommandsList };
