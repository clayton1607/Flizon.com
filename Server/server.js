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






app.listen(port);
