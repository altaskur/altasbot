const socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log("Conectado al servidor");

  socket.on("message", (msg) => {
    let textContent = document.querySelectorAll("span")[1];
    let mainInner = document.querySelector(".main-inner");
    let notificationContainer = document.querySelector(".notification-inner");

    mainInner.classList.add("ux-show");
    notificationContainer.classList.add("ux-showText");
    textContent.textContent = msg.msg;

    console.log("He recibido un mensaje: " + msg);

    setTimeout(() => {
      mainInner.classList.remove("ux-show");
      notificationContainer.classList.remove("ux-showText");
      textContent.textContent = "";
    }, 6000);
  });
});

socket.on("disconnect", () => {
  console.log("Desconectado del servidor");
});
