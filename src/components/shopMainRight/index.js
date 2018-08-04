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
     products: [],
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

  const request_data = {
    url: 'http://localhost:8888/wp-json/wc/v2/products/28/variations',
    method: 'GET',
  };

  fetch(request_data.url, {
    method: request_data.method,
    headers: oauth.toHeader(oauth.authorize(request_data))
  })
    .then(response => response.json())
    .then(response => {
      this.setState({
         products: response
      })
   })
}

render() {
  console.log("here", this.state.products);
  let lengthVariations = this.state.products.map( (product, index) => {
    return (
      <div key={index}>
        <LengthSelectorButtons lengths={product.attributes[0].option}></LengthSelectorButtons>
      </div>
    )
  });

  return(
  <div style={{display: 'inline-block'}}>
  <div className="mainRightContainer">
      <h1 className="hairTitle">{this.props.hairPatternName}</h1>
      <h2 className="subTitles">{this.props.hairTextureName}</h2>
      <h3 className="subTitles"> Prices from £175.00 – £350.00</h3>
      <LaceSelectorButtons></LaceSelectorButtons>
      <p style={{paddingTop: '40px', marginBottom: '-5px',}} className="subTitles">Lengths</p>
      {lengthVariations}
      <div className="cartButton"><h1 onClick={this.handleBasket.bind(this)} className="cartTitle">ADD TO CART</h1></div>
      <ReviewsShopPage></ReviewsShopPage>
  </div>
  </div>

    );
  }
}




export default MainRight;
