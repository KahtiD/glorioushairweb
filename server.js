const express = require('express');
const WooCommerceAPI = require('woocommerce-api');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const multer  = require('multer');
const nodemailer = require('nodemailer');

const upload = multer({ dest: 'uploads/' });
const app = express();
const port = 3001;

// const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(history());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// const jsonParser = bodyParser.json()

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ddufeegblbtwonz6@ethereal.email', // e-commerce email
        pass: '2FspGyGn6tjU4f21Ab'
    },
    tls: {
      rejectedUnauthorized: false
    }
});

const WooCommerce = new WooCommerceAPI({
  url: 'http://localhost:8888/', // Your store URL
  consumerKey: 'ck_c7755f9b61466a51acdf48f3a9ac64278cf78945', // Your consumer key
  consumerSecret: 'cs_e5d1175046600b95f2a24d956956fdd407e13888', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2' // WooCommerce WP REST API version
});


let response;
  WooCommerce.get('products', (err, data, res) => {
    response = res;
    app.get('/products', (req, res, err) => {
      if (res.status(200)) {
      res.status(200).json(JSON.parse(response));
    } else {
      console.log('theres an error', err);
    }
  })
});

app.post('/contactUs', upload.single('file'), (req, res) => {
  const emailOutput = `
  <h1>Bish here is the new email hoe</h1>
  <h2>About: ${req.body.subject}</h2>
  <h2>Sent from: ${req.body.name}</h2>
  <p>Message: ${req.body.message}</p>
  <p>Attachement: ${req.file}</p>
  `

  console.log(req.body);
  console.log(req.file);
  let mailOptions = {
          from: ' "Ya Bish" ddufeegblbtwonz6@ethereal.email', // e-commerce email
          to: req.body.email, // client/customers email
          subject: req.body.subject,
          text: 'Hello world?',
          html: emailOutput,
          attachments: {
            filename: req.file.originalname,
            path: req.file.path,
          }
      };

  transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          // res.render('', )
    });

})






app.listen(port, () => console.log(`Listening on port ${port}`));
