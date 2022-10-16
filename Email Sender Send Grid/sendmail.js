// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('')

const fs = require("fs");

const msg = {
  to: 'singhaadesh2001@gmail.com', // Change to your recipient
  from: 'aaryan2134@gmail.com', // Change to your verified sender
  subject: 'Adoption Update',
  text: 'Hi,\n You adoption request has been successfully accepted. You will receive further communication soon \n \n Regards, \n Love The Pets! \n www.lovethosepets.tech\n',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })