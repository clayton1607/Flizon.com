const express = require('express');
const hbs =require('hbs');
const fs = require('fs');
const nodemailer=require('nodemailer');
const mysql=require('mysql');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const jwt=require('jsonwebtoken');

var {contact}=require('./tables/contact.js');
var {users}=require('./tables/users.js');
//var {otpdb}=require('./tables/otpdb.js');
var {admin}=require('./tables/admin.js');
//var {pension}=require('./tables/pension.js');
var {personal}=require('./tables/personal.js');

//var {pension_id}=require('./tables/pension_id.js');
//var {pension_add}=require('./tables/pension_add.js');
//var {pension_bank}=require('./tables/pension_bank.js');
//var {insurance}=require('./tables/insurance.js');
//var {insurance_id}=require('./tables/insurance_id.js');
//var {insurance_add}=require('./tables/insurance_add.js');
//var {insurance_bank}=require('./tables/insurance_bank.js');
