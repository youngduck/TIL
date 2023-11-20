const mysql = require("mysql");

exports.Info = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "board",
});
