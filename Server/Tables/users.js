var {con}=require('../db/mysql');

var users=con;

  let sql = "CREATE TABLE if not exists users(username varchar(255) primary key,email varchar(255),password varchar(255)  ,personal boolean,last_login varchar(255),signup_date varchar(255))";
  //type none default
  //ytpe farmer

  users.query(sql, function (err, result) {
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

module.exports={users};
// insert into users(username,email,password,personal,last_login,signup_date) values("Lenson","len.v.dan@gmail.com","len",false,"24/07/2018","23/07/2018");
