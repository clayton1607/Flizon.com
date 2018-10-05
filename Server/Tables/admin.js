var {con}=require('../db/mysql');
var admin=con;

  let sql = "CREATE TABLE if not exists admin (admin_id varchar(255) primary key,email varchar(255),password varchar(255),last_login varchar(255), priveledges varchar(255),phone_no varchar(255),fax varchar(255),details varchar(255))";
  admin.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

module.exports={admin};
