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

        if(haveCommand.command == "!gintonic"){
          let totalGintonics = Math.floor(Math.random() * 101);
          let gintonicMessage = `/me @altaskur le debe ${totalGintonics} gintonics a @bypepe77  con un valor total de ${totalGintonics * 8} €`
          this.sendChatMessage({
            message: gintonicMessage
          }, target);

          haveCommand.haveToSendSocket = true;
          haveCommand.socket.message = `🍸 ${totalGintonics} gintonics a @bypepe77`;
          console.log(haveCommand)
          if(ctx.username == "bypepe77"){
            console.log("Efectivamente lo ha lanzado byppepe")
            haveCommand.haveToSendAudio = true;
            haveCommand.socket.audio = "gintonic.mp3";
          }
            // si quieres resetear el audio completa con un else
        }


        if(haveCommand.haveToSendText){
          this.sendChatMessage({ message: haveCommand.message }, target);
        }

        if(haveCommand.haveToSendSocket){

          this.sendSocketMessage({
            data:  haveCommand.socket.message,
            audio: haveCommand.haveToSendAudio ? haveCommand.socket.audio: null,
            });
        }
      }
    });
  }

  addCommands(name, func) {
    this.dict[name] = func;
  }
}

module.exports = { Commands };



