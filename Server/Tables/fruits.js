var {con}=require('../db/mysql');
var fruits=con;

  let sql = "CREATE TABLE if not exists fruiit(auction_no INT not null,type_fruits varchar(255) not null,quantity varchar(255) not null,fruit_ripe varchar(255) not null,sensory_attributes varchar(255),nutritive_values varchar(255),chemical_constituents varchar(255),mechanical_properties varchar(255),defects varchar(255),FOREIGN KEY fk_auction (auction_no) REFERENCES auction_ad (auction_no) ON UPDATE CASCADE ON DELETE CASCADE)";
  //type none default
  //ytpe farmer

  fruits.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


  module.exports={fruits};
