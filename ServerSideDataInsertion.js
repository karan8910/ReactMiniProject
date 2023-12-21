let exp = require("express");
let mysql = require("mysql2");
let cor = require("cors");
let bp = require("body-parser");
let app = exp();

app.listen(9000, function () {
  console.log("express with restapi");
});
app.use(cor());
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "knowit",
});
con.connect(function (err) {
  if (!err) {
    console.log("database connected");
  } else {
    console.log("database not connected");
  }
});

app.use(bp.json());
app.post("/empsStore", function (req, res) {
  var username = req.body.uname;
  var useremail = req.body.uemail;
  var usermobno = req.body.umobno;
  var userroll = req.body.uroll;
  var q = "insert into user (username,email,Mobno,roll_idroll) values (?,?,?,?)";

  con.query(q, [username,useremail,usermobno,userroll], function (err) {
    if (!err) {
      res.send("Sucess");
    } else {
      res.send("Unsucess" + err);
    }
  });
});
app.all("*", function (req, res) {
  res.send("<p> URL is unknown </p>");
});
