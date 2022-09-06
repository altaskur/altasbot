const { AltasBot } = require("./src/altasbot/main.js");
const { ServerExpress } = require("./src/socketServer/main.js");

const socket = new ServerExpress();
socket.start();
