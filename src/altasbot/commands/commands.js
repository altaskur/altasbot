class Commands {
  constructor(client) {
    this.client = client;
    this.dict = {};
  }

  getCommands() {
    this.client.on("chat", (target, ctx, message, self) => {
      if (self) return;
      const commandName = message.toLowerCase();
      console.log(commandName);
      if (commandName.startsWith("!") && this.dict[commandName]) {
        this.dict[commandName](this.client, target, ctx, message, self);
        console.log(`* Executed ${commandName} command`);
      }
    });
  }

  addCommands(name, func) {
    this.dict[name] = func;
  }
}

module.exports = { Commands };
