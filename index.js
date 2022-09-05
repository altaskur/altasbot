const { AltasBot } = require("./src/altasbot/main.js");
const { SocketsServer } = require("./src/socketServer/main.js");

const bot = new AltasBot();
bot.execute();

const socket = new SocketsServer();
socket.start();
