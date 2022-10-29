const socketInit = require("../../socketServer/socketInit.js");

const mJSON = require("./comand-list.json");
const messages = mJSON.messages;

const activeCommands = ["!test"];
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
      const haveCommand = messages.find(
        (command) => command.command === message.toLowerCase()
      );

      if (haveCommand) {
        
        haveCommand.haveToSendText && this.sendChatMessage({ message: haveCommand.message }, target);

        haveCommand.haveToSendSocket && this.sendSocketMessage({
          data:  haveCommand.socket.message,
          audio: haveCommand.haveToSendAudio ? haveCommand.socket.audio: null,
          });
      }
    });
  }

  addCommands(name, func) {
    this.dict[name] = func;
  }
}

module.exports = { Commands };

