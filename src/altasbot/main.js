const { connectorInstance } = require("./connector");
const { commanList } = require("./commands/command-list");
const { streamCommandsList } = require("./stream/streamCommandsList");

class AltasBot {
  constructor() {
    connectorInstance.connect();
    commanList(connectorInstance.commands);
    streamCommandsList(connectorInstance.stream);
  }

  execute() {
    connectorInstance.listen();
  }
}

module.exports = { AltasBot };
