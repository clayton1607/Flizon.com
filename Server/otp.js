//var {otpdb}=require('./tables/otpdb.js');

var otp={
  otp_key: 123456,
  // insert_otp:function(){
  //   let sql='INSERT INTO otpdb(otp) VALUES(?)';
  //   otpdb.query(sql,[otp.otp_key.toString()], function (err, result) {
  //     if (err)
  //       console.log(err);
  //     console.log("1 record inserted");
  //   });
  //
  // },
  // delete_otp:function(){
  //   let sql='DELETE FROM otpdb';
  //   optdb.query(sql,[''],(err,results)=>{
  //     if(err)
  //       console.log(err);
  //     console.log("1 record deleted");
  //   });
  //
  // }
};

module.exports={otp};
