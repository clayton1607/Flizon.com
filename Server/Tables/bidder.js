var {con}=require('../db/mysql');
var bidder=con;
let sql = "CREATE TABLE if not exists bidder(username varchar(255) not null,bid_value varchar(255),FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE)";
bidder.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});

module.exports={bidder};
