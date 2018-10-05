var {con}=require('../db/mysql');
var foodgrains=con;
let sql = "CREATE TABLE if not exists foodgrains(auction_no int not null,grain varchar(255),grain_type varchar(256),quality varchar(256) default null,milling_degree int,milling recovery int,dockage int,broken_grain int,chalkiness int,FOREIGN KEY fk_auc (auctoin_no) REFERENCES auction (auction_no) ON UPDATE CASCADE ON DELETE CASCADE)";
foodgrains.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Foodgrain table created");
});

module.exports={foodgrains};
