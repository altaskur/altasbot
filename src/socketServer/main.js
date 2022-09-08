const express = require("express");

const http = require("http");
const cors = require("cors");
const SocketInit = require("./socketInit");

const { connectorInstance } = require("../altasbot/connector");
const { commanList } = require("../altasbot/commands/command-list");
const { streamCommandsList } = require("../altasbot/stream/streamCommandsList");

class ServerExpress {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    connectorInstance.connect();
    this.port = 3000;
  }

  middlewares() {
    this.app.use(cors({ origin: true }));
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    //Refactor this routes to a new file
    this.app.get("/audio/:audioName", (req, res) => {
      const { audioName } = req.params;
      res.sendFile(__dirname + `/public/audio/${audioName}`);
    });
  }

  startCommands() {
    commanList(connectorInstance.commands);
    streamCommandsList(connectorInstance.stream);
  }

  start() {
    this.middlewares();

    SocketInit.connect(this.server);

    connectorInstance.listen();

    this.startCommands();

    this.routes();

    this.server.listen(this.port, () => {
      console.log("Example app listening on port", this.port);
    });
  }
}

module.exports = { ServerExpress };
