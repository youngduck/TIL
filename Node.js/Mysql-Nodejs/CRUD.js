const connect = require("./Info.js");

exports.Read = function (req, res) {
  var connection = connect.Info;

  connection.query("select * from board", (err, result) => {
    console.log(result);
    res.send(result);
  });
};

exports.Create = function (req, res) {
  var writer = req.params.writer;
  var connection = connect.Info;

  connection.query(
    `insert into board(title,content,writer) values('새로운글2test','새로운글2','${writer}')`,
    (err, result) => {
      if (err) return res.json({ create_success: false, err });
      console.log(result);
      res.status(200).json({ create_success: true });
    }
  );
};

exports.Update = function (req, res) {
  var connection = connect.Info;

  connection.query(
    "UPDATE board SET content = '하나에 오천원!' WHERE title='고구마삽니다'",
    (err, result) => {
      if (err) return res.json({ update_success: false, err });
      console.log(result);
      res.status(200).json({ update_success: true });
    }
  );

  connection.end();
};

exports.Delete = function (req, res) {
  var connection = connect.Info;

  connection.query(
    "DELETE FROM board WHERE title='고구마ㅍ삽니다'",
    (err, result) => {
      if (err) return res.json({ delete_success: false, err });
      console.log(result);
      res.status(200).json({
        delete_success: true,
      });
    }
  );

  connection.end();
};
