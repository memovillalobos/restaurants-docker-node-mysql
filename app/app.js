var express = require('express')
var app     = express()
const port  = 3000;

var mysql = require('mysql')

var con = mysql.createConnection({
  host: "database",
  user: "root",
  password: "root",
  database: "restaurants"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function (req, res) {

  sql = 'SELECT * FROM restaurants';

  con.query(sql, function (err, result) {
    if (err) res.json(err);

    res.json(result);
  });


})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
