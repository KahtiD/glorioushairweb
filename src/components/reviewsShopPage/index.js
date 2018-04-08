import React, { Component } from 'react';
import './reviewsShopPage.css';
import {LaceSelectorButtons, LengthSelectorButtons} from '../../components';
import fiveStars from '../../images/stars.png';
// import {Link} from 'react-router-dom';


export class ReviewsShopPage extends Component {
  constructor(props) {
   super(props);

   this.state = {


   }
 }

render() {

  return(
  <div>
    <div style={{width: '335px', height: '469px', margin: '0 auto', marginTop: '40px', paddingTop: '98px'}}>
      <div className="summaryReview">
        <h1 style={{fontSize: '30px'}}>Customer Reviews</h1>
        <div style={{width: '268px', height: '47px', margin: '0 auto' }}>
          <img src={fiveStars} alt="fiveStars" height="100%" width="100%"></img>
        </div>
        <p style={{color: '#281560', fontSize: "17px"}}>Based on {this.props.reviewsNumber}</p>
        <p style={{color: '#727272', fontSize: "17px"}}>Write a review</p>
      </div>
      <div className="recentReview">
        <h1 className="recentTitle">AMAZING QUALITY</h1>
        <div style={{width: '268px', height: '47px', margin: '0 auto' }}>
          <img src={fiveStars} alt="fiveStars" height="100%" width="100%"></img>
        </div>
        <p style={{color: '#727272', fontSize: "17px"}}><strong>Shola</strong> on <strong>Oct 09, 2017</strong></p>
        <p style={{color: '#281560', fontSize: "17px"}}>Read more...</p>
      </div>
    </div>

  </div>

    );
  }
}




export default ReviewsShopPage;
