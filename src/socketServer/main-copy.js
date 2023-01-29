const sse = require("express")();

sse.get("/", (req, res) => {
  console.log("SSE: Client connected");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const intervalId = setInterval(() => {
    const date = new Date().toLocaleString();
    res.write(`data: ${date} \n\n`);
  }, 1000);

  res.on("close", () => {
    clearInterval(intervalId);
    res.end();
    console.log("SSE: Client disconnected");
  });
});

sse.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
