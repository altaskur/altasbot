const tmi = require("tmi.js");
require("dotenv").config();

const { Commands } = require("./commands/commands");
const { Stream } = require("./stream/stream");
const { Chat } = require("./chat/chat");

class Connector {
  constructor() {
    this.client = new tmi.Client({
      options: { debug: true },
      identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN,
      },
      channels: [process.env.CHANNEL_NAME],
    });

    this.commands = new Commands(this.client);
    this.stream = new Stream(this.client);
    this.chat = new Chat(this.client);
  }

  connect() {
    this.client.connect();
  }

  listen() {
    this.commands.getCommands();
    this.commands.addCommands();
    this.stream.getStatus();
    this.stream.moderator();
    this.chat.onMessage();
  }
}

const connectorInstance = new Connector();
module.exports = { connectorInstance, Connector };
