var {con}=require('../db/mysql');
var contact=con;
let sql = "CREATE TABLE if not exists fertilizers(auction_no int not null,fertilizer_type varchar(255),quality varchar(256) default null,composition_nkp varchar(256),FOREIGN KEY fk_auc (auctoin_no) REFERENCES auction (auction_no) ON UPDATE CASCADE ON DELETE CASCADE)";
contact.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Fertilizer table created");
});

module.exports={contact};
