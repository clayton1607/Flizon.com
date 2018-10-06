var {con}=require('../db/mysql');
var bidder=con;
let sql = "CREATE TABLE if not exists bidder(auction_no int,username varchar(255) not null,bid_value varchar(255),FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE,FOREIGN KEY fk_auctionno (auction_no) REFERENCES auction_ad(auction_no) ON UPDATE CASCADE ON DELETE CASCADE)";
bidder.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});

module.exports={bidder};



// insert into bidder(auction_no,username,bid_value) values (1,"Clayton",6000);
