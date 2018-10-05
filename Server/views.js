
const express = require('express');
//const express = require('express');
const hbs =require('hbs');
//const fs = require('fs');
//const nodemailer=require('nodemailer');
//const mysql=require('mysql');
const bodyParser = require('body-parser');

var app =express();
//ar {authenticate}=require('./middleware/authenticate.js');
var {users}=require('./Tables/users.js');
app.use(express.static(__dirname+'/Public'));
app.use(bodyParser.json());
console.log(__dirname+'/Public');
app.set('view engine','hbs');

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

module.exports={app};
