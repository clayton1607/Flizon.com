
const express = require('express');
//const express = require('express');
const hbs =require('hbs');
//const passport=require('passport');
//const fs = require('fs');
//const nodemailer=require('nodemailer');
//const mysql=require('mysql');
const bodyParser = require('body-parser');
// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;
//
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
var app =express();
//ar {authenticate}=require('./middleware/authenticate.js');
var {users}=require('./Tables/users.js');
app.use(express.static(__dirname+'/Public'));
app.use(bodyParser.json());
console.log(__dirname+'/Public');
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());
//app.get('',(req,res)=>{});
app.get('/',(req,res)=>{
  res.render('test/home.hbs');
});
app.get('/home',(req,res)=>{
  res.render('test/home.hbs');
});

app.get('/faq',(req,res)=>{
  res.render('test/faq.hbs');
});
app.get('/about',(req,res)=>{
  res.render('test/about.hbs');
});
app.get('/contact',(req,res)=>{
  res.render('test/contact.hbs');
});
app.get('/me/home',(req,res)=>{
  res.render('test/homel.hbs');
});

app.get('/me/faq',(req,res)=>{
  res.render('test/faql.hbs');
});
app.get('/me/about',(req,res)=>{
  res.render('test/aboutl.hbs');
});
app.get('/me/contact',(req,res)=>{
  res.render('test/contactl.hbs');
});
app.get('/otp',(req,res)=>{
  res.render('test/otp.hbs');
});
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
app.get('/logout',(req,res)=>{
  res.redirect('/');
});

app.get('/me/addproduct',(req,res)=>{
  res.render('test/add.hbs');
});

app.get('/me/personal',(req,res)=>{
  res.render('test/personal.hbs');
});
app.get('/me/credit_card',(req,res)=>{
  res.render('test/creditCard.hbs');
});
module.exports={app};
