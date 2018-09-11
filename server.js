const express = require('express');
const WooCommerceAPI = require('woocommerce-api');
var stringify = require('json-stringify-safe');
const app = express();
const port = process.env.PORT || 3001;



const WooCommerce = new WooCommerceAPI({
  url: 'http://localhost:8888/', // Your store URL
  consumerKey: 'ck_c7755f9b61466a51acdf48f3a9ac64278cf78945', // Your consumer key
  consumerSecret: 'cs_e5d1175046600b95f2a24d956956fdd407e13888', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2' // WooCommerce WP REST API version
});

app.get('/', function(req, res){
    res.sendFile(__dirname+'/client/public/index.html'); // change the path to your index.html
});

let response;
app.get('/products', (req, res, err) => {
  WooCommerce.get('products', function(err, data, res) {
    response = res;
  });
  res.status(200).json(JSON.parse(response));
});



app.listen(port, () => console.log(`Listening on port ${port}`));
