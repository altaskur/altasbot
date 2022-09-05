const { connectorInstance } = require("./connector");
const { commanList } = require("./commands/command-list");

class AltasBot {
  constructor() {
    connectorInstance.connect();
    commanList(connectorInstance.commands);
  }

  execute() {
    connectorInstance.listen();
  }
}

module.exports = { AltasBot };
