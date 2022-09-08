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

        console.log("Hey llego a escuchar el chat");

        console.log("Este es el comando: " + commandName);

        console.log("Este es el diccionario: ", this.dict);

        if (commandName.startsWith("!") && this.dict[commandName]) {
          this.dict[commandName](this.client, target, ctx, message, self);
          console.log(`* Executed ${commandName} command`);
        }
      }
    });
  }

  addCommands(name, func) {
    this.dict[name] = func;
  }
}

module.exports = { Stream };
