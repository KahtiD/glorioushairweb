import React, { Component } from 'react';
import './shopMainRight.css';
import {LaceSelectorButtons, LengthSelectorButtons, ReviewsShopPage,} from '../../components';
// import {Link} from 'react-router-dom';


export class MainRight extends Component {

render() {
  const {productVarations, productAllData, evenArray, evenSelected, oddArray, oddSelected, addToCart, handleSelectL1, handleSelectL2} = this.props;
  if (productAllData.length === 0) {
      return null;
    }
  const defaultLace = productAllData.default_attributes[0].option
  const evenPrice = evenArray[evenSelected] && evenArray[evenSelected].price;
  const oddPrice = oddArray[oddSelected] && oddArray[oddSelected].price;
  let highest = Math.max(...productVarations.map(highPrice => highPrice.price));
  let lowest = Math.min(...productVarations.map(lowPrice => lowPrice.price));

  return(
  <div style={{display: 'inline-block'}}>
  { !productVarations.length && <p>Waiting for 2 seconds...</p> }
  <div className="mainRightContainer">
      <h1 className="hairTitle">{this.props.hairPatternName}</h1>
      <h2 className="subTitles">{this.props.hairTextureName}</h2>
      {oddSelected !== null ? <h2 className="subTitles">Price: £{oddPrice}</h2>
        : evenSelected !== null ? <h2 className="subTitles">Price: £{evenPrice}</h2>
        : <h3 className="subTitles">Prices from £{lowest} – £{highest}</h3>
      }
      <LaceSelectorButtons defaultLace={defaultLace}></LaceSelectorButtons>
      <p style={{paddingTop: '40px', marginBottom: '-5px',}} className="subTitles">Lengths</p>
      <LengthSelectorButtons products={productVarations} evenArray={evenArray} oddArray={oddArray}
                             evenIndex={evenSelected} oddIndex={oddSelected}
                             handleSelectL1={handleSelectL1} handleSelectL2={handleSelectL2}/>
      <div className="cartButton" onClick={addToCart}><h1 className="cartTitle">ADD TO CART</h1></div>
      <ReviewsShopPage></ReviewsShopPage>
  </div>
  </div>

    );
  }
}




export default MainRight;
