var {con}=require('../db/mysql');
var auction=con;
let sql = "CREATE TABLE if not exists auction_ad(username varchar(255) not null,auction_no INT primary key  AUTO_INCREMENT,auction_caption varchar(1000) not null,auc_description varchar(1000),category varchar(255),msp int,FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE)";
auction.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});

module.exports={auction};
