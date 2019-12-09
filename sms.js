// Twilio Credentials
//from twilio.rest import Client

const accountSid = 'insert Account SID here'; 
const authToken = 'insert Auth Token here'; 
const client = require('twilio')(accountSid, authToken); 

var smsMessage = "hello world";

async function main() {

client.messages
  .create({
     body: smsMessage,
     from: 'insert twilio number',
     to: 'insert recepient number here'
   })
  .then(message => console.log(message.sid));
}

main();