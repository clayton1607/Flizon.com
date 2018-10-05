const express = require('express');
const hbs =require('hbs');
const fs = require('fs');
const nodemailer=require('nodemailer');
const mysql=require('mysql');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const jwt=require('jsonwebtoken');

var {contact}=require('./Tables/contact.js');
var {users}=require('./Tables/users.js');
//var {otpdb}=require('./tables/otpdb.js');
var {admin}=require('./Tables/admin.js');
//var {pension}=require('./tables/pension.js');
var {personal}=require('./Tables/personal.js');
var {auction_ad}=require('./Tables/auction_ad.js');
var {fruits}=require('./Tables/fruits.js');
var {vegetables}=require('./Tables/vegetables.js');
var {bidder}=require('./Tables/bidder.js');
var {credit_card}=require('./Tables/credit_card.js');
//var {pension_id}=require('./tables/pension_id.js');
//var {pension_add}=require('./tables/pension_add.js');
//var {pension_bank}=require('./tables/pension_bank.js');
//var {insurance}=require('./tables/insurance.js');
//var {insurance_id}=require('./tables/insurance_id.js');
//var {insurance_add}=require('./tables/insurance_add.js');
//var {insurance_bank}=require('./tables/insurance_bank.js');

var {mailmake}=require('./email.js');
var {mailsend}=require('./email.js');
var {app}=require('./views.js');
var {nexmo}=require('./smshandler.js');
app.post('/home',(req,res)=>{
  let stmt = `INSERT INTO contact(name_home,email,message)
            VALUES(?,?,?)`;
  let todo = [req.body.Name,req.body.Email,req.body.Message];
  contact.query(stmt,todo,(err,result)=>{
    if(err)
      console.log(err);
    console.log("1 message inserted");
    res.redirect('/home');
  })
});
app.post('/login',(req,res)=>{
  console.log(req.body);

  let stmt = `SELECT * FROM users WHERE username=? AND password=?`;
  //let todo = [req.body.username,req.body.email,req.body.password,false];
  users.query(stmt,[req.body.username,req.body.password],function (err, result,fields) {
  //  if (err) throw err;
  var d=new Date();
    if(result[0].username ==req.body.username && result[0].password==req.body.password){
      let stmt = `UPDATE users SET last_login =? WHERE username =? AND password =?`;
      let todo = [d,req.body.username,req.body.password];
      users.query(stmt,todo, function (err, result){
        if (err)
          console.log(err);
        console.log("login date update");
      });
      otp.otp_key=Math.floor(100000 + Math.random() * 900000);
      mailmake.text=otp.otp_key.toString();
      mailmake.to=result[0].email;
      mailsend.send();
      res.redirect('/otp');
      console.log('false');
    }
    //console.log(result);
    //console.log(result[0].username+'hello');

    //res.render('Public/Home/Aunthentication/otp.hbs');
  });
  //res.redirect('/otp');
});
app.post('/signup',(req,res)=>{
  console.log(req.body);

  // var username=req.body.username;
  var access='auth';
  var token=jwt.sign({username: req.body.username,access},'specialKEy');
  // var decoded=jwt.verify(token,'specialKEy');
  // console.log(decoded);
  // console.log(token);
  // res.set('x-auth', token);

  var d= new Date();
  let stmt = `INSERT INTO users(username,email,password,token_accees,token,application_status,last_login,signup_date)
            VALUES(?,?,?,?,?,?,?,?)`;
  let todo = [req.body.username,req.body.email,req.body.password,access,token,false,d,d];
  users.query(stmt,todo, function (err, result) {
    if (err)
      console.log(err);
    console.log("1 record inserted");

    //setting pension status
    let sql = "INSERT INTO pension (application_status ,pension_personal,pension_id ,pension_add ,pension_bank ,dr_calc_status ,dr_calc ,gratuity_calc_status ,gratuity_calc ,pension_calc_status ,pension_calc ,username) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    pension.query(sql,["pending",false,false,false,false,false,"",false,"",false,10,req.body.username], function (err, result) {
      if (err) throw err;
      console.log("1 record pension status inserted");
    });

    //setting insurance status
    let sql2='INSERT INTO insurance (application_status ,insurance_id ,insurance_add ,insurance_bank ,username) VALUES(?,?,?,?,?)';
    insurance.query(sql2,["pending",false,false,false,req.body.username],(err,result)=>{
      if (err) throw err;
      console.log("1 record insurance status inserted");
    });
    otp.otp_key=Math.floor(100000 + Math.random() * 900000);
    console.log(otp.otp_key);
    mailmake.text=otp.otp_key.toString();
    mailmake.to=req.body.email;
    mailsend.send();
    res.redirect('/otp');
    //res.redirect('/otp');
    //res.render('Public/Home/Aunthentication/otp.hbs');
  });
});





app.listen(port);
