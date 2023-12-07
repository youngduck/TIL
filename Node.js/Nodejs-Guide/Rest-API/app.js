const express = require("express");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Orgin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
	next();
});

app.use("/feed", feedRoutes);

console.log("8080 run");
app.listen(8080);
