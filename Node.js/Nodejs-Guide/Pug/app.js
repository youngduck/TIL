const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//pug설정 start
app.set("view engine", "pug");
app.set("views", "views");
//pug설정 end

const rootDir = require("./util/path.js");
const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404");
});
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
