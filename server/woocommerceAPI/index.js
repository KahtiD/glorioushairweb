const WooCommerceAPI = require('woocommerce-api');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const request = require('request');
const express = require('express');
const app = express()

const WooCommerce = new WooCommerceAPI({
  url: 'http://localhost:8888',
  consumerKey: 'ck_c7755f9b61466a51acdf48f3a9ac64278cf78945',
  consumerSecret: 's_e5d1175046600b95f2a24d956956fdd407e13888',
  wpAPI: true,
  version: 'wc/v2'
});

const oauth = OAuth({
  consumer: {
    key: 'ck_c7755f9b61466a51acdf48f3a9ac64278cf78945',
    secret: 's_e5d1175046600b95f2a24d956956fdd407e13888'
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

const request_data = {
    productsURL: "http://localhost:8888/wp-json/wc/v2/products/28/variations",
    method: 'GET'
}

app.get('/getProductVariations', function(req, res, next)  {
  request(
  {
    url: request_data.productsURL,
    method: request_data.method,
    headers: oauth.toHeader(oauth.authorize(request_data))
  },
  function(error, response, body) {
    res.status(200).json(data)
    console.log("finally made a request bishh");
  }
  )
});

app.listen(3000, () => console.log('hello'));
