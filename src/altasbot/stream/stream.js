require("dotenv").config();

class Stream {
  constructor(client) {
    console.log("client loaded", client);
    this.client = client;
  }

  moderator() {
    this.client.on("chat", (target, ctx, message, self) => {
      if (self) {
        return;
      }

      if (ctx.mod || ctx.username == process.env.CHANNEL_NAME) {
        // Ponemos los comandos de moderación
        const commandName = message;
        if (commandName.startsWith("!")) {
          switch (commandName) {
            case "!emoteOn":
              this.client.emoteonly(process.env.CHANNEL_NAME).catch((err) => {
                console.error(err);
              });
              break;
            case "!emoteOff":
              this.client
                .emoteonlyoff(process.env.CHANNEL_NAME)
                .catch((err) => {
                  console.error(err);
                });
              break;
            case "!followersOn":
              this.client
                .followersonly(process.env.CHANNEL_NAME, 5)
                .catch((err) => {
                  console.error(err);
                });
              break;
            case "!followersOff":
              this.client
                .followersonlyoff(process.env.CHANNEL_NAME)
                .catch((err) => {
                  console.error(err);
                });
              break;
            case "!slowOn":
              this.client.slow(process.env.CHANNEL_NAME, 5).catch((err) => {
                console.error(err);
              });
              break;
            case "!slowOff":
              this.client.slowoff(process.env.CHANNEL_NAME).catch((err) => {
                console.error(err);
              });
              break;
            case "!subsOn":
              this.client.subscribers(process.env.CHANNEL_NAME).catch((err) => {
                console.error(err);
              });
              break;
            case "!subsOff":
              this.client
                .subscribersoff(process.env.CHANNEL_NAME)
                .catch((err) => {
                  console.error(err);
                });
              break;
            default:
              break;
          }
          if (commandName.startsWith("!timeout")) {
            const options = commandName.trim().split(" ");
            console.log("options", options);
            if (options.length == 3) {
              this.client
                .timeout(
                  process.env.CHANNEL_NAME,
                  options[1],
                  options[2],
                  option[3]
                )
                .catch((err) => {
                  console.log("Error en el comando!");
                });
            } else {
              this.client.say(
                process.env.CHANNEL_NAME,
                ` ${ctx.username} no has puesto el tiempo`
              );
            }
          }
        }
      }
    });
  }
}

module.exports = { Stream };
