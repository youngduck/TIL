const express = require("express");
const app = express();
const PORT = 3000;
const CRUD = require("./CRUD.js");

const server = app.listen(PORT, () => {
  console.log(`${PORT}시_작`);
});

app.get("/", (req, res) => {
  res.send("메인");
});

//READ
app.get("/show", (req, res) => {
  CRUD.Read(req, res);
});

//CREATE
app.post("/upload/:writer", (req, res) => {
  CRUD.Create(req, res);
});

//UPDATE
app.put("/update", (req, res) => {
  CRUD.Update(req, res);
});

//DELETE
app.delete("/delete", (req, res) => {
  CRUD.Delete(req, res);
});
