class Events {
  constructor(client) {
    this.client = client;
  }

  getEvents() {
    this.client.on("join", (channel, username, self) => {
      if (self || process.env.CHANNEL_NAME) return;

      this.client.action(
        process.env.CHANNEL_NAME,
        "/me MrDestructoid Bienvenida/o al canal ",
        username
      );
    });

    this.client.on("raided", (channel, username, viewers) => {
      console.log("Raid de ", viewers, " personas por parte de ", username);
      this.client.action(
        process.env.CHANNEL_NAME,
        `/me MrDestructoid Raid de ${viewers} personas por parte de ${username}`
      );
    });

    this.client.on(
      "subscription",
      (channel, username, method, message, userstate) => {
        console.log("Nuevo suscriptor ", username);
        this.client.action(
          process.env.CHANNEL_NAME,
          `/me MrDestructoid Nuevo suscriptor ${username}`
        );
      }
    );

    this.client.on(
      "resub",
      (channel, username, months, message, userstate, methods) => {
        console.log("Nuevo suscriptor ", username);
        this.client.action(
          process.env.CHANNEL_NAME,
          `/me MrDestructoid Nuevo suscriptor ${username}`
        );
      }
    );

    this.client.on("cheer", (channel, userstate, message) => {
      console.log(userstate + "nos ha mandado " + userstate.bits + " bits");
      this.client.action(
        process.env.CHANNEL_NAME,
        `/me MrDestructoid ${userstate.username} nos ha mandado ${userstate.bits} bits`
      );
    });

    this.client.on("hosted", (channel, username, viewers, autohost) => {
      console.log(
        username + " ha hosteado el canal con " + viewers + " viewers"
      );
      this.client.action(
        process.env.CHANNEL_NAME,
        `/me MrDestructoid ${username} ha hosteado el canal con ${viewers} viewers`
      );
    });

    this.client.on("ritual", (channel, username, userstate) => {
      console.log(
        username + " ha hablado por primera vez en el canal bienvenida/o"
      );
      this.client.action(
        process.env.CHANNEL_NAME,
        `/me MrDestructoid ${username} ha hablado por primera vez en el canal bienvenida/o`
      );
    });

    this.client.on("ban", (channel, username, reason) => {
      console.log(username + " ha sido baneado del canal por " + reason);
      this.client.action(
        process.env.CHANNEL_NAME,
        `/me MrDestructoid ${username} ha sido baneado del canal por ${reason}`
      );
    });

    this.client.on("timeout", (channel, username, reason, duration) => {
      console.log(
        username + " ha sido baneado temporalmente del canal por " + reason
      );
      this.client.action(
        process.env.CHANNEL_NAME,
        `/me MrDestructoid ${username} ha sido baneado temporalmente del canal por ${reason}`
      );
    });
  }
}
module.exports = { Events };
