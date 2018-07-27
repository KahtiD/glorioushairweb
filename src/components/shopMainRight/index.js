import React, { Component } from 'react';
import './shopMainRight.css';
import {LaceSelectorButtons, LengthSelectorButtons, ReviewsShopPage,} from '../../components';
// import {Link} from 'react-router-dom';


export class MainRight extends Component {
  constructor(props) {
   super(props);

   this.state = {
     showCart: false
   }
 }





render() {

  return(
  <div style={{display: 'inline-block'}}>
  <div className="mainRightContainer">
      <h1 className="hairTitle">{this.props.hairPatternName}</h1>
      <p className="subTitles">{this.props.hairTextureName}</p>
      <LaceSelectorButtons></LaceSelectorButtons>
      <p style={{paddingTop: '121.5px'}}className="subTitles">Lengths</p>
      <LengthSelectorButtons lengths="16, 14, 12 AND 12"></LengthSelectorButtons>
      <div className="cartButton"><h1 onClick={this.props.doCS} className="cartTitle">ADD TO CART</h1></div>
      <ReviewsShopPage></ReviewsShopPage>
  </div>
  </div>

    );
  }
}




export default MainRight;
