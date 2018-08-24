import React, { Component } from 'react';
import './shopPages.css';
import {Footer, Header, MainLeft, MainRight} from '../../components';
import OAuth from 'oauth-1.0a';
import crypto from 'crypto';
// import {Link} from 'react-router-dom';


export class shopPages extends Component {
  constructor(props) {
   super(props);
   this.state = {
     showMenu: false,
     products1: [],
     products2: [],
     oddSelected: null,
     evenSelected: null,
     evenArray: [],
     oddArray: [],
     cart: [],
     response: [],
   }

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

async componentDidMount() {
  const idType = [];
  const response = await fetch('/products');
  const json = await response.json();
  json.forEach(product => { idType.push(JSON.stringify(product.id)) });
  this.setState({ response: idType });
  console.log(this.state.response);

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
    url: "http://localhost:8888/wp-json/wc/v2/products/" + this.state.response[2] + "/variations?per_page=15",
    method: 'GET',
  };

  console.log('url', request_data1.url)
  const request_data2 = {
    url: 'http://localhost:8888/wp-json/wc/v2/products/' + this.state.response[2],
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

menuShow = () => {
console.log(this.state.showMenu)
  this.setState({
    showMenu : !this.state.showMenu,

  });
}


render() {
  const regex = /(<([^>]+)>)/ig;
  const name = this.state.products2.description && this.state.products2.description.replace(regex, '');
  return(

<div>
      <div className="sPagesContainerBody">
        <Header moveBody={this.menuShow.bind(this)} showMenu={this.state.showMenu} cart={this.state.cart} ></Header>
          <div className={this.state.showMenu ? "moveSpacing2" : "containerBody"}>
              <MainLeft productAllData={this.state.products2}></MainLeft>
              <MainRight hairPatternName={this.state.products2.name} hairTextureName={name}
                  productVarations={this.state.products1} productAllData={this.state.products2}
                  evenArray={this.state.evenArray} evenSelected={this.state.evenSelected}
                  oddArray={this.state.oddArray} oddSelected={this.state.oddSelected} addToCart={this.addToCart.bind(this)}
                  handleSelectL1={this.handleSelectL1} handleSelectL2={this.handleSelectL2}></MainRight>
          </div>
      </div>
     <Footer></Footer>
</div>

    );
  }
}


export default shopPages;
