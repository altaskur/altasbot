class Chat {
  constructor(client) {
    this.client = client;
    this.viewers = {};
  }

  onMessage() {
    console.log(reports + " reports");
    this.client.on("message", (channel, userstate, message, self) => {
      if (self) return;
      const username = userstate.username;
      const displayName = userstate["display-name"];
      const color = userstate.color;
      const subscriber = userstate.subscriber;
      const mod = userstate.mod;
      //   const type = userstate["message-type"];

      this.viewers.forEach((viewer) => {
        if (viewer.username === username) {
          viewer.messages++;
        } else {
          this.viewers.push({
            username: username,
            displayName: displayName,
            color: color,
            subscriber: subscriber,
            mod: mod,
            messages: 1,
          });
        }
      });
    });
  }

  onFinish() {
    console.log(this.viewers);
  }
}

module.exports = { Chat };
