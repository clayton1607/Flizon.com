var {con}=require('../db/mysql');
var contact=con;
let sql = "CREATE TABLE if not exists dairy(auction_no int not null,dairy_type varchar(255),quantity varchar(256),FOREIGN KEY fk_auc (auctoin_no) REFERENCES auction (auction_no) ON UPDATE CASCADE ON DELETE CASCADE)";
contact.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Diary table created");
});

module.exports={contact};
