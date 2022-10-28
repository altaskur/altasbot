const socketInit = require("../../socketServer/socketInit.js");

const mJSON = require("./comand-list.json");
const messages = mJSON.messages;
// const messages = [
//   {
//     command: "!test",
//     message: `/me Bip Bop 010101 test!`,
//     haveToSendText: false,
//     haveToSendSocket: true,
//     haveToSendAudio: true,
//     socketMessage: "Bip Bop 010101 test",
//     audio: "alert.wav",
//   },
// ];

class Commands {
  constructor(client) {
    this.client = client;
    this.dict = {};
  }

  sendSocketMessage(data) {
    const socketConnection = socketInit.getConnection();
    socketConnection.sendEvent("message", data);
  }

  sendChatMessage(data, target) {
    this.client.say(target, data.message);
  }

  getCommands() {
    this.client.on("chat", (target, ctx, message, self) => {
      if (messages.includes(message.toLowerCase())) {
        const commandInfo = messages.find(
          (command) => command.command === message.toLowerCase()
        );

        commandInfo.haveToSendText &&
          this.sendChatMessage({ message: commandInfo.message }, target);

        commandInfo.haveToSendSocket &&
          this.sendSocketMessage({
            data: commandInfo.socketMessage,
            audio: commandInfo.haveToSendAudio ? commandInfo.audio : null,
          });
      }
    });
  }

  addCommands(name, func) {
    this.dict[name] = func;
  }
}

module.exports = { Commands };

/*
      if (self) return;
      const commandName = message.toLowerCase();
      console.log(commandName);
      if (commandName.startsWith("!") && this.dict[commandName]) {
        this.dict[commandName](this.client, target, ctx, message, self);
        console.log(`* Executed ${commandName} command`);
      }
*/
