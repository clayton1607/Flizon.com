const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey:'d6169db9',
  apiSecret:'17FBIoJFZMVfe4jr'
})

const from = 'Flizon.com'
const to = 917387426536
const text = 'A text message sent using the Nexmo SMS API'

nexmo.message.sendSms(from, to, text)
module.exports={nexmo};
