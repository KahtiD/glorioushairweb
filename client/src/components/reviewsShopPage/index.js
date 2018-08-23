import React, { Component } from 'react';
import './reviewsShopPage.css';
//import {LaceSelectorButtons, LengthSelectorButtons} from '../../components';
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
    <div style={{width: '100%', height: '100%', paddingTop: '60px'}}>
      <div style={{margin: '0 auto', width: '600px'}}>
        <div className="summaryReview">
          <h1 style={{fontSize: '27px'}}>Customer Reviews</h1>
          <div style={{width: '241.2px', height: '42.3px', margin: '0 auto' }}>
            <img src={fiveStars} alt="fiveStars" height="100%" width="100%"></img>
          </div>
          <p style={{color: '#281560', fontSize: "15.3px"}}>Based on {this.props.reviewsNumber}</p>
          <p style={{color: '#727272', fontSize: "15.3px"}}>Write a review</p>
        </div>
        <div className="recentReview">
          <h1 className="recentTitle">AMAZING QUALITY</h1>
          <div style={{width: '241.2px', height: '42.3px', margin: '0 auto' }}>
            <img src={fiveStars} alt="fiveStars" height="100%" width="100%"></img>
          </div>
          <p style={{color: '#727272', fontSize: "15.3px"}}><strong>Shola</strong> on <strong>Oct 09, 2017</strong></p>
          <p style={{color: '#281560', fontSize: "15.3px"}}>Read more...</p>
        </div>
      </div>
    </div>

  </div>

    );
  }
}




export default ReviewsShopPage;
