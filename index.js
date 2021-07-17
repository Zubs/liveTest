const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:8080",
    },
});

io.on("connection", (socket) => {
  console.log(socket.id)
});

httpServer.listen(3000);
