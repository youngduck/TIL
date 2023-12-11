const express = require("express");
const bodyParser = require("body-parser");
const feedRoutes = require("./routes/feed");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
	next();
});

app.use("/feed", feedRoutes);

mongoose
	.connect(
		"mongodb+srv://dudejr5839:ANfJXBfoxfeHdShe@cluster0.y5pywm5.mongodb.net/messages?retryWrites=true&w=majority"
	)
	.then((result) => {
		app.listen(8080);
	})
	.catch((err) => {
		console.log(err);
	});
