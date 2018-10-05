var {con}=require('../db/mysql');
var auction=con;
let sql = "CREATE TABLE if not exists auction_ad(username varchar(255) not null,auction_no INT primary key  AUTO_INCREMENT,category varchar(255),msp varchar(255),FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE)";
auction.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});

module.exports={auction};
