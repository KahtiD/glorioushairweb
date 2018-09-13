const express = require('express');
const WooCommerceAPI = require('woocommerce-api');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;

// const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(history());
app.use(bodyParser.json());

// const jsonParser = bodyParser.json()


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

app.post('/contactUs', (req, res) => {
  console.log(req.body);
})


app.listen(port, () => console.log(`Listening on port ${port}`));
