const express = require("express");
const socket = require("socket.io");
const cors = require("cors");

const app = express();
const server = app.listen(3000, "0.0.0.0");

app.use(express.static("public"));
app.use(cors());

const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});