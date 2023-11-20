const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3000;
const server = app.listen(port);
const io = require("socket.io")(server);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "socketio_test",
});

app.get("/get_messages", (req, res) => {
  connection.query(
    `
    SELECT * FROM messages
  `,
    (err, messages) => {
      res.end(JSON.stringify(messages));
    }
  );
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("유저연결", socket.id);
  socket.on("new_message", (data) => {
    console.log("client says", data);
    io.emit("new_message", data);
    connection.query(
      `
        INSERT INTO messages (message) values(?)`,
      [data]
    );
  });
});
