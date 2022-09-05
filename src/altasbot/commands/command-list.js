var reports = 0;
const { io } = require("../../socketServer/main.js");

function commanList(commands) {
  commands.addCommands("!hola", (client, target, ctx, message, self) => {
    client.say(target, `/me MrDestructoid Hola ${ctx.username}!`);
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
  });
  commands.addCommands("!report", (client, target, ctx, message, self) => {
    reports++;
    client.say(
      target,
      `/me @altaskur ha sido reportado por ${ctx.username} un total de ${reports} veces y se ha enviado a rito!`
    );
  });

  commands.addCommands("!tema", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me El tema de vscode es Enfocado: https://wuelnerdotexe.github.io/enfocado/`
    );
  });
}

module.exports = { commanList };
