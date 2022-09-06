const express = require("express");

const http = require("http");
const cors = require("cors");
const SocketInit = require("./socketInit");

const { connectorInstance } = require("../altasbot/connector");
const { commanList } = require("../altasbot/commands/command-list");

class ServerExpress {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    connectorInstance.connect();
    commanList(connectorInstance.commands);
    this.port = 3000;
  }

  middlewares() {
    this.app.use(cors({ origin: true }));
  }

  start() {
    this.middlewares();

    SocketInit.connect(this.server);

    connectorInstance.listen();

    this.server.listen(this.port, () => {
      console.log("Example app listening on port", this.port);
    });
  }
}

module.exports = { ServerExpress };
