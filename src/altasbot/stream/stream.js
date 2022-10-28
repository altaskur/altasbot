class Stream {
  constructor(client) {
    this.client = client;
    this.dict = {};
  }

  getCommands() {
    this.client.on("chat", (target, ctx, message, self) => {
      if (self) return;
      if (ctx.mod || ctx.username == process.env.CHANNEL_NAME) {
        const commandName = message.toLowerCase();

        if (commandName.startsWith("!") && this.dict[commandName]) {
          this.dict[commandName](this.client, target, ctx, message, self);
          console.log(`* Executed ${commandName} command`);
        }

        if (commandName.startsWith("!promo")) {
          let test = message.split(" ")[1].split("@")[1];
          console.log("El mensaje es", test);

          this.client.say(
            target,
            `/me ${ctx.username} te recomienda este streamer: https://www.twitch.tv/${test}`
          );
        }
      }
    });
  }

  addCommands(name, func) {
    this.dict[name] = func;
  }
}

module.exports = { Stream };
