const nodemailer=require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'claytonpereira1998@gmail.com',
    pass: 'clayton@16071998iqweasd'
  }

});
//var otp=Math.floor(100000 + Math.random() * 900000);
var mailmake = {
    from: 'claytonpereira1998@gmail.com',
    to: '',
    subject: 'OTP',
    text: ''
};
var mailsend ={
  send : function() {
    transporter.sendMail(mailmake, function(error, info){
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
    })
  }
};


module.exports={mailmake,mailsend};
