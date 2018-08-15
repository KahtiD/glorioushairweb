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
     addBasket: false,
     products1: [],
     products2: [],
     oddSelected: null,
     evenSelected: null,
     evenArray: [],
     oddArray: [],
     cart: [],
   }
 }



handleBasket(){
  this.setState({
    addBasket: !this.state.addBasket
  })
  if (this.state.addBasket === true) {

  }
}

handleSelectL1 = i => {

  this.setState({
     evenSelected: i,
     oddSelected: null
   });
}

handleSelectL2 = i => {
  this.setState({
     oddSelected: i,
     evenSelected: null
   });
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
         const products1 = response.reverse();
         const evenArray = products1.filter((el, i) => i % 2 === 0);
         const oddArray = products1.filter((el, i) => i % 2 !== 0);
         this.setState( prevState => ( {
              products1: [ ...prevState.products1, ...products1 ],
              evenArray: [...prevState.evenArray, ...evenArray ],
              oddArray: [...prevState.oddArray, ...oddArray],
         } ))
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

addToCart() {
    const selectedProductE = this.state.evenArray[this.state.evenSelected];
    const selectedProductO = this.state.oddArray[this.state.oddSelected];
    if (this.state.evenSelected !== null ) {
    this.setState({
      cart: [...this.state.cart, selectedProductE ]
    });
  } else if (this.state.oddSelected !== null ){
    this.setState({
      cart: [...this.state.cart, selectedProductO ]
    });
  }
  }


render() {
  const product  = this.state.products1;
  const product2 = this.state.products2;
  const evenIndex = this.state.evenSelected;
  const oddIndex = this.state.oddSelected;

  if (product2.length === 0) {
      return null;
    }

 const defaultLace = product2.default_attributes[0].option

 const evenPrice = this.state.evenArray[evenIndex] && this.state.evenArray[evenIndex].price;
 const oddPrice = this.state.oddArray[oddIndex] && this.state.oddArray[oddIndex].price;
 let highest = Math.max(...product.map(highPrice => highPrice.price));
 let lowest = Math.min(...product.map(lowPrice => lowPrice.price));


    console.log('cart', this.state.cart);


  return(
  <div style={{display: 'inline-block'}}>
  { !this.state.products1.length && <p>Waiting for 2 seconds...</p> }
  <div className="mainRightContainer">
      <h1 className="hairTitle">{this.props.hairPatternName}</h1>
      <h2 className="subTitles">{this.props.hairTextureName}</h2>
      {oddIndex !== null ? <h2 className="subTitles">Price: £{oddPrice}</h2>
        : evenIndex !== null ? <h2 className="subTitles">Price: £{evenPrice}</h2>
        : <h3 className="subTitles">Prices from £{lowest} – £{highest}</h3>
      }
      <LaceSelectorButtons defaultLace={defaultLace}></LaceSelectorButtons>
      <p style={{paddingTop: '40px', marginBottom: '-5px',}} className="subTitles">Lengths</p>
      <LengthSelectorButtons products={this.state.products} evenArray={this.state.evenArray} oddArray={this.state.oddArray}
                             evenIndex={this.state.evenSelected} oddIndex={this.state.oddSelected}
                             handleSelectL1={this.handleSelectL1} handleSelectL2={this.handleSelectL2}/>
      <div className="cartButton" onClick={this.addToCart.bind(this)}><h1 className="cartTitle">ADD TO CART</h1></div>
      <ReviewsShopPage></ReviewsShopPage>
  </div>
  </div>

    );
  }
}




export default MainRight;
