const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey:'b03ff309',
  apiSecret:'KwxUy9xeTjuJbYEn'
})

const from = '917387426536'
const to = '918999491690'
const text = 'A text message sent using the Nexmo SMS API'

nexmo.message.sendSms(from, to, text)
module.exports={nexmo};
