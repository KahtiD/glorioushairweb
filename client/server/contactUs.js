const routes = require('loopback').Router();

const nodemailer = require('nodemailer');
EmailTemplate = require('email-templates').EmailTemplate;
path = require('path');
Promise = require('bluebird');

routes.post('/contactus', (req, res) => {

 transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: {
     user: 'kahti.demba@gmail.com',
     pass: 'fabolous19'
   }
 })

 let content = [
      {
      userName: "Kahti",
      email: "kahti.demba@hotmail.co.uk",
      subject: "Test",
      message: "Testing"

    }
  ];

  function sendEmail (obj) {
    return transporter.sendMail(obj);
  }

 function loadTemplate (templateName, contexts) {
    let template = new EmailTemplate(path.join(__dirname, 'ContactUsEmailTemplate', templateName));
    return Promise.all(contexts.map((context) => {
      return  new Promise((resolve, reject) => {
        template.render(context, (err, result) => {
          if (err) reject(err);
          else resolve({
            email: result,
            context
          });
        });
      });
     }));
  }

  loadTemplate('contactusEmail', content ).then((results) => {
    console.log(JSON.stringify(results, null, 4));
    return Promise.all(results.map((result) => {
      sendEmail({
        from: 'Contact Us Form',
        to: 'kahti.demba@gmail.com',
        subject: 'New enquiry from ' + {userName} + ' regarding' + {subject},
        html: result.email.html,
        text: result.email.text
      });
  }));
}).then(() => {
  console.log("SENT");
})


});
