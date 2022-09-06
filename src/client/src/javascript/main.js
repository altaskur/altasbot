const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log("Conectado al servidor");

  socket.on("message", (message) => {
    let textContent = document.querySelectorAll("span")[1];
    let mainInner = document.querySelector(".main-inner");
    let notificationInner = document.querySelector(".notification-inner");
    let notificationContainer = document.querySelector(
      ".notification-container"
    );

    mainInner.classList.add("ux-show");
    notificationInner.classList.add("ux-showText");
    textContent.textContent = message.data;
    setTimeout(() => {
      notificationContainer.classList.add("ux-typing");
    }, 3000);

    console.log("He recibido un mensaje: " + message.data);

    setTimeout(() => {
      mainInner.classList.remove("ux-show");
      notificationInner.classList.remove("ux-showText");
      notificationContainer.classList.remove("ux-typing");
      textContent.textContent = "";
    }, 6000);

    if (message.audio) {
      console.log("He recibido un audio: " + message.audio);
      let audio = document.querySelector("audio");
      audio.src = `http://localhost:3000/audio/${message.audio}`;
      setTimeout(() => {
        audio.play();
      }, 2000);
    }
  });
});

socket.on("disconnect", () => {
  console.log("Desconectado del servidor");
});
