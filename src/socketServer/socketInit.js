const { Server } = require("socket.io");
let connection = null;

class SocketInit {
  constructor() {
    this._socket = null;
  }

  publishEvent(event, data) {
    this.io.emit(event, data);
  }

  connect(server) {
    const io = new Server(server, {
      cors: {
        origin: "*",
      },
    });
    io.on("connection", (socket) => {
      this._socket = socket;
      console.log("a user connected");
    });
  }

  sendEvent(event, data) {
    this._socket.emit(event, data);
  }

  static init(server) {
    if (!connection) {
      connection = new SocketInit();
      connection.connect(server);
    }
  }

  static getConnection() {
    if (connection) return connection;
    else return console.log("No connection");
  }
}

module.exports = {
  connect: SocketInit.init,
  getConnection: SocketInit.getConnection,
};
