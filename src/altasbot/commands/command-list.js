var reports = 0;
const socketInit = require("../../socketServer/socketInit.js");
const commandList = require("./comand-list.json");

function sendSocket(data) {
  const connection = socketInit.getConnection();
  connection.sendEvent("message", data);
}

function executeCommand(commands) {
  
}

function commanList(commands) {
  executeCommand();
  commands.addCommands("!hola", (client, target, ctx, message, self) => {
    client.say(target, `/me MrDestructoid Hola ${ctx.username}!`);
    sendSocket({
      data: `Hola ${ctx.username}!`,
      audio: "alert.wav",
    });
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
  commands.addCommands("!404", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me ${ctx.username} ha detectado un error de @altaskur en el código`
    );
    sendSocket({
      data: `@altaskur la ha liado parda`,
      audio: "alert.wav",
    });
  });

  commands.addCommands("!problemas", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me ${ctx.username} ha encontrado un error 500 en el directo! `
    );
    sendSocket({
      data: `${ctx.username} ha encontrado un error en el directo!`,
      audio: "alert.wav",
    });
  });
  commands.addCommands("!bot", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me Soy un bot creado por  @altaskur y @bypepe77, puedes ver mi código en github: 
      https://github.com/altaskur/altasbot`
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
    sendSocket({
      data: `Gracias @wuelnerdotexe por su tema de vscode @altaskur np esta ciego`,
      audio: "alert.wav",
    });
  });
  commands.addCommands("!donWeb", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me El tema de vscode es Enfocado: https://wuelnerdotexe.github.io/enfocado/`
    );
    sendSocket({
      data: `Gracias @wuelnerdotexe por su tema de vscode @altaskur np esta ciego`,
      audio: "alert.wav",
    });
  });
  commands.addCommands("!sae", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me Mirar el trabajo de esta pedazo de artista: https://twitter.com/Saeyeea, https://www.instagram.com/saeyeea/ , https://www.twitch.tv/saeyeea`
    );
  });

  commands.addCommands("!burncss", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me ${ctx.username} ha quemado css en directo! y se ha quedado sin pelo `
    );
    sendSocket({
      data: `@altaskur deja CSS para @manzdev`,
      audio: "alert.wav",
    });
  });

  commands.addCommands("!burnjava", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me 3 Millones de dispositivos ejecutan java, y @${ctx.username} ha quemado java en directo! `
    );
  });

  commands.addCommands("!burnvim", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me ${ctx.username} ha quemado vim en directo! 9/10 sysadmins entraron en pánico `
    );
    sendSocket({
      data: `${ctx.username} 🔥🔥 VIM 🔥🔥`,
      audio: "alert.wav",
    });
  });

  commands.addCommands("!burnpython", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me ${ctx.username} ha quemado python en directo! Lua ha entrado en una nueva era dorada `
    );
    sendSocket({
      data: `${ctx.username} 🔥🔥 PYTHON 🔥🔥 LUA ❤ 🎉`,
      audio: "alert.wav",
    });
  });

  commands.addCommands("!web", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me 💻 Puedes ir a la web del canal https://altaskur.github.io/ ⚠️ en construcción ⚠️`
    );
    sendSocket({
      data: `a ver si @altaskur termina la web de una vez`,
      audio: "alert.wav",
    });
  });

  commands.addCommands("!wiki", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me 💻 Puedes ir a la wiki del canal https://github.com/altaskur/Apuntes`
    );
  });

  commands.addCommands("!luisllamas", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me 💻 Visita el blog de @LuisLlamas_es https://luisllamas.es/ y su directo https://www.twitch.tv/luisllamas_es `
    );
    sendSocket({
      data: `MQTT send to @LuisLlamas_es`,
      audio: "alert.wav",
    });
  });

  commands.addCommands("!danirod", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me 💻  Visita su directo https://www.twitch.tv/danirod_ y los video tutoriales de su canal https://www.youtube.com/c/makigas`
    );
  });
  commands.addCommands("!manz", (client, target, ctx, message, self) => {
    client.say(
      target,
      `/me 💻  Visita su directo https://www.twitch.tv/manzdev a su web https://manz.dev/ y su canal de youtube https://www.youtube.com/c/ManzDev`
    );
  });
  commands.addCommands("!comandos", (client, target, ctx, message, self) => {
    client.say(
      "altaskur",
      `/me Lista de comandos: !burncss, !burnjava, !burnvim, !burnpython, !web, !wiki, !luisllamas, !danirod, !manz, !tema, !bot, !problemas, !error, !sae, !comandos`
    );
  });
}

module.exports = { commanList };
