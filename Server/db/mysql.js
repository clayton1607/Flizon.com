const mysql=require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "solo",
  password: "solo",
  database: "mydb"
});

module.exports ={con};
