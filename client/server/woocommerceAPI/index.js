const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const WooCommerceAPI = require('woocommerce-api');
const express = require('express');



const WooCommerce = new WooCommerceAPI({
  url: 'http://localhost:8888', // Your store URL
  consumerKey: 'ck_c7755f9b61466a51acdf48f3a9ac64278cf78945', // Your consumer key
  consumerSecret: 'cs_e5d1175046600b95f2a24d956956fdd407e13888', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2' // WooCommerce WP REST API version
});


WooCommerce.get('products', function(err, data, res) {

  console.log('res', res)
});
