import React, { Component } from 'react';
import './shopMainRight.css';
import {LaceSelectorButtons, LengthSelectorButtons, ReviewsShopPage,} from '../../components';
import OAuth from 'oauth-1.0a';
import crypto from 'crypto';


// import {Link} from 'react-router-dom';


export class MainRight extends Component {
  constructor(props) {
   super(props);

   this.state = {
     showCart: false,
     addToCart: [],
     addBasket: false,
     products1: [],
     products2: [],
   }
 }

handleBasket(){
  this.setState({
    addBasket: !this.state.addBasket
  })
  if (this.state.addBasket === true) {

  }
}

componentDidMount() {
  const oauth = OAuth({
    consumer: {
      key: 'ck_c7755f9b61466a51acdf48f3a9ac64278cf78945',
      secret: 'cs_e5d1175046600b95f2a24d956956fdd407e13888',
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto.createHmac('sha1', key).update(base_string).digest('base64');
    }
  });

  const request_data1 = {
    url: 'http://localhost:8888/wp-json/wc/v2/products/28/variations?per_page=15',
    method: 'GET',
  };

  const request_data2 = {
    url: 'http://localhost:8888/wp-json/wc/v2/products/28/',
    method: 'GET',
  };

  fetch(request_data1.url, {
    method: request_data1.method,
    headers: oauth.toHeader(oauth.authorize(request_data1))
  })
    .then(response => response.json())
    .then(response => {
      this.setState({
         products1: response.reverse()
      })
   })

   fetch(request_data2.url, {
     method: request_data2.method,
     headers: oauth.toHeader(oauth.authorize(request_data2))
   })
     .then(response => response.json())
     .then(response => {
       this.setState({
          products2: response
       })
    })
}




render() {
  const product  = this.state.products1;
  const product2 = this.state.products2;

  if (product2.length === 0) {
      return null;
    }

 const defaultLace = product2.default_attributes[0].option
 console.log(defaultLace);

  const evenArray = [];
  const oddArray = [];

    for (let i=0; i< product.length; i++ ) {
      if (i % 2 === 0 ){
        evenArray.push(product[i])
      } else {
        oddArray.push(product[i])
      }
    };

const highest = Math.max(...product.map(highPrice => highPrice.price));
const lowest = Math.min(...product.map(lowPrice => lowPrice.price));


  return(
  <div style={{display: 'inline-block'}}>
  <div className="mainRightContainer">
      <h1 className="hairTitle">{this.props.hairPatternName}</h1>
      <h2 className="subTitles">{this.props.hairTextureName}</h2>
      <h3 className="subTitles"> Prices from £{lowest} – £{highest}</h3>
      <LaceSelectorButtons defaultLace={defaultLace}></LaceSelectorButtons>
      <p style={{paddingTop: '40px', marginBottom: '-5px',}} className="subTitles">Lengths</p>
      <LengthSelectorButtons products={this.state.products} evenArray={evenArray} oddArray={oddArray}/>
      <div className="cartButton"><h1 onClick={this.handleBasket.bind(this)} className="cartTitle">ADD TO CART</h1></div>
      <ReviewsShopPage></ReviewsShopPage>
  </div>
  </div>

    );
  }
}




export default MainRight;
