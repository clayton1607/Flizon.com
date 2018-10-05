var {con}=require('../db/mysql');
var contact=con;
let sql = "CREATE TABLE if not exists contact( name_home varchar(255),email varchar(255),message varchar(255))";
contact.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});

module.exports={contact};
