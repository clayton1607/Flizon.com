const express = require('express');
//const express = require('express');
const hbs =require('hbs');
//const fs = require('fs');
//const nodemailer=require('nodemailer');
//const mysql=require('mysql');
const bodyParser = require('body-parser');
var {auction}=require('./Tables/auction_ad.js');
var {sig}=require('./views3.js');
var exp =sig;
var {username_curent}=require('./views3.js');

//ar {authenticate}=require('./middleware/authenticate.js');
var {users}=require('./Tables/users.js');
exp.use(express.static(__dirname+'/Public'));
exp.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
console.log(__dirname+'/Public');
exp.set('view engine','hbs');


exp.get('/me/auction',(req,res)=>{
  var username=req.query.usern;
  console.log("username in auc"+username_curent);

  auction.query('select * from auction_ad order by msp desc',(err,rows)=>{
     if(err) console.log("BAD");

var zero=rows[0].auction_caption;
var zero1=rows[0].auc_description;
var zero2=rows[0].auction_no;
var zero3=rows[0].msp;
var zero4=rows[0].shipping_fee;
var zero5=rows[0].category;

var one=rows[1].auction_caption;
var one1=rows[1].auc_description;
var one2=rows[1].auction_no;
var one3=rows[1].msp;
var one4=rows[1].shipping_fee;
var one5=rows[1].category;

var two=rows[2].auction_caption;
var two1=rows[2].auc_description;
var two2=rows[2].auction_no;
var two3=rows[2].msp;
var two4=rows[2].shipping_fee;
var two5=rows[2].category;

var three=rows[3].auction_caption;
var three1=rows[3].auc_description;
var three2=rows[3].auction_no;
var three3=rows[3].msp;
var three4=rows[3].shipping_fee;
var three5=rows[3].category;

var four=rows[4].auction_caption;
var four1=rows[4].auc_description;
var four2=rows[4].auction_no;
var four3=rows[4].msp;
var four4=rows[4].shipping_fee;
var four5=rows[4].category;

var five=rows[5].auction_caption;
var five1=rows[5].auc_description;
var five2=rows[5].auction_no;
var five3=rows[5].msp;
var five4=rows[5].shipping_fee;
var five5=rows[5].category;

var six=rows[6].auction_caption;
var six1=rows[6].auc_description;
var six2=rows[6].auction_no;
var six3=rows[6].msp;
var six4=rows[6].shipping_fee;
var six5=rows[6].category;

var seven=rows[7].auction_caption;
var seven1=rows[7].auc_description;
var seven2=rows[7].auction_no;
var seven3=rows[7].msp;
var seven4=rows[7].shipping_fee;
var seven5=rows[7].category;


      res.render('test/auction.hbs',{zero,zero1,zero2,zero3,zero4,zero5,one,one1,one2,one3,one4,one5,two,two1,two2,two3,two4,two5,three,three1,three2,three3,three4,three5,four,four1,four2,four3,four4,four5,five,five1,five2,five3,five4,five5,six,six1,six2,six3,six4,six5,seven,seven1,seven2,seven3,seven4,seven5});
   });

});

exp.get('/auction_disp',(req,res)=>{
  var zero2=req.query.zero2;
  var zero3=req.query.zero3;
  var zero4=req.query.zero4;
  var zero5=req.query.zero5;

  auction.query('select * from bidder where auction_no=? order by bid_value desc',zero2,(err,rows)=>{
     if(err) console.log("BAD");
// console.log(rows[0]);
     var highest_name=rows[0].username;
     var highest_bid=rows[0].bid_value;
     var second_name="NA";
     var second_bid="NA";

     if(rows.length>1){
       var second_name=rows[1].username;
       var second_bid=rows[1].bid_value;
     }
     res.render('test/auction-display.hbs',{username,zero2,zero3,zero4,zero5,highest_name,highest_bid,second_name,second_bid});

   });
});
// });
exp.post('/bid',urlencodedParser,(req,res)=>{
  var usernamex=req.query.username;
  var bidval=req.body.bidv;
  var auc_no=req.query.zero2;
  auction.query('select * from bidder where auction_no=? order by bid_value desc',auc_no,(err,rows)=>{
     if(err) console.log("BAaad");
console.log(req.user);

     var highest_bid=rows[0].bid_value;

if(highest_bid>=bidval){
  res.redirect('back');
}
    else {
      var values=[[auc_no,"Anol",bidval]];
      auction.query('insert into bidder (auction_no,username,bid_value) values ?',[values],(err,rows)=>{
         if(err) console.log("BAD");
         res.redirect('back');

       });
    }

   });
});
exp.get('/me/add',(req,res)=>{
  res.render('test/add.hbs');
})
exp.post('/me/addproduct',urlencodedParser,(req,res)=>{
  var auction_type=req.body.auction_type;

  if(auction_type==1){

    var auc_caption=req.body.auc_caption ;//caption
    var auc_category=req.body.auc_category ;//category
    var auc_condition=req.body.auc_condition ;
    var auc_shape=req.body.shape ;
    var auc_quantity=req.body.quantity;

var description = "Grain condition is "+auc_condition+"Grain Shape is :"+auc_shape+"Quantity is :"+auc_quantity;

  }
  else if (auction_type==2) {
    var auc_caption=req.body.auc_caption2 ;//caption
    var auc_category=req.body.auc_category2 ;//category
    var auc_condition=req.body.auc_condition2 ;
    var auc_quantity=req.body.quantity2;

var description = "Fruit condition is "+auc_condition+"Quantity is :"+auc_quantity;
  }
  else if (auction_type==3) {
    var auc_caption=req.body.auc_caption3;//caption
    var auc_category=req.body.auc_caption3;//category
    var auc_condition=req.body.auc_condition3 ;
    var auc_quantity=req.body.quantity3;

var description = "Vegetable condition is "+auc_condition+"Quantity is :"+auc_quantity;
  }
  else if (auction_type==4) {
    var auc_caption=req.body.auc_caption4;//caption
    var auc_category=req.body.auc_category4;//category
    var auc_quantity=req.body.quantity4;

var description = "Quantity is :"+auc_quantity;
  }
  else if (auction_type==5) {
    var auc_caption=req.body.auc_caption5;//caption
    var auc_category=req.body.auc_caption5;//category
    var auc_quantity=req.body.quantity5;

var description = "Quantity is :"+auc_quantity;
  }
  var auc_msp= req.body.msp;

var values=[["Lenson",auc_caption,description,auc_category,500]];
  auction.query('insert into auction_ad (username,auction_caption,auc_description,category,msp,shipping_fee) values ?',[values],(err,rows)=>{
     if(err) console.log("BAD");
     console.log(rows);
     console.log("Auction table updated");
});

});


module.exports={exp};
