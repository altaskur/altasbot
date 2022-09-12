const { ServerExpress } = require("./src/socketServer/main.js");

const socket = new ServerExpress();
socket.start();
