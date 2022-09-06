var reports = 0;
const socketInit = require("../../socketServer/socketInit.js");

function sendSocket(data) {
  const connection = socketInit.getConnection();
  connection.sendEvent("message", data);
}

function commanList(commands) {
  commands.addCommands("!hola", (client, target, ctx, message, self) => {
    client.say(target, `/me MrDestructoid Hola ${ctx.username}!`);
  });

  commands.addCommands("!adios", (client, target, ctx, message, self) => {
    client.say(target, `/me MrDestructoid adios ${ctx.username}!`);
  });

  commands.addCommands("!test", (client, target, ctx, message, self) => {
    sendSocket({
      data: `Bip Bop 010101 test ${ctx.username}`,
      audio: "alert.wav",
    });
  });

  commands.addCommands("!discord", (client, target, ctx, message, self) => {
    client.say(target, `/me Discord: https://discord.gg/4aNWsdCfpd`);
  });
  commands.addCommands("!github", (client, target, ctx, message, self) => {
    client.say(target, `/me GitHub: https://github.com/altaskur/altaskur`);
  });

  commands.addCommands("!twitter", (client, target, ctx, message, self) => {
    client.say(target, `/me Twitter: https://twitter.com/altaskur`);
  });

  // redes
  commands.addCommands("!redes", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me Twitter: https://twitter.com/altaskur GitHub: https://github.com/altaskur/altaskur Discord: https://discord.gg/4aNWsdCfpd `
    );
  });

  commands.addCommands("!gintonic", (client, target, ctx, message, self) => {
    let totalGintonics = Math.floor(Math.random() * 101);
    client.say(
      target,
      `/me @altaskur le debe ${totalGintonics} gintonics a @bypepe77  con un valor total de ${
        totalGintonics * 8
      } €`
    );

    sendSocket(
      ctx.username == "bypepe77"
        ? {
            data: `🍸 ${totalGintonics} gintonics a @bypepe77`,
            audio: "gintonic.mp3",
          }
        : { data: `🍸 ${totalGintonics} gintonics a @altaskur` }
    );
  });
  commands.addCommands("!report", (client, target, ctx, message, self) => {
    reports++;
    client.say(
      target,
      `/me @altaskur ha sido reportado por ${ctx.username} un total de ${reports} veces y se ha enviado a rito!`
    );
    let socketText = { data: "🚨 has sido reportado por @bypepe77 🚨" };
    if (reports > 1) {
      socketText = {
        data: `🚨 Van ${reports} reports y se han enviado a rito! 🚨`,
      };
    }
    sendSocket(socketText);
  });

  commands.addCommands("!bot", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me Soy un bot creado por @altaskur, puedes ver mi código en github: https://github.com/altaskur/altasbot`
    );
    sendSocket({
      data: `🤖 Soy un bot creado por @altaskur y @bypepe77`,
      audio: "alert.wav",
    });
  });

  commands.addCommands("!tema", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me El tema de vscode es Enfocado: https://wuelnerdotexe.github.io/enfocado/`
    );
  });

  commands.addCommands("!sae", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me Mirar el trabajo de esta pedazo de artista: https://twitter.com/Saeyeea`
    );
  });
}

module.exports = { commanList };
