var {con}=require('../db/mysql');
var credit_card=con;

  let sql = "CREATE TABLE if not exists credit_card(username varchar(255) not null,credit_card_no varchar(255) not null,credit_card_expiry date,card_name varchar(255),cvv varchar(255) not null,FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE)";
  //type none default
  //ytpe farmer

  credit_card.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
// var token ={
//   generateAuthToken : function(username){
//     var access='auth';
//     var token=jwt.sign({username: username,access},'specialKEy');
//     var decoded=jwt.verify(token,'specialKEy');
//     console.log(decoded);
//     console.log(token);
//     return token;
//   }
//   current_token:"";
// };

module.exports={credit_card};
