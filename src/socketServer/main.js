const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const socketInit = require("./socketInit");
var io = undefined;

class SocketsServer {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new Server(this.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });
    this.port = 3000;
  }

  middlewares() {
    this.app.use(cors({ origin: true }));
  }

  socketConfiguration() {
    //socketInit(this.io);/
    this.io.on("connection", (socket) => {
      console.log("New client connected!");
      this.listenHello(socket);
    });
  }

  listenHello(socket) {
    //socket.emit("message", `/me MrDestructoid Hola aaa!`);
  }

  start() {
    this.middlewares();

    this.socketConfiguration();

    this.server.listen(this.port, () => {
      console.log("Example app listening on port", this.port);
    });
  }
}

module.exports = { SocketsServer, io };
