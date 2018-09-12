import React, { Component } from 'react';
import './reviewsShopPage.css';
//import {LaceSelectorButtons, LengthSelectorButtons} from '../../components';
import fiveStars from '../../images/stars.png';
// import {Link} from 'react-router-dom';


export class ReviewsShopPage extends Component {
  constructor(props) {
   super(props);

   this.state = {
     write: false,
     name: '',
     review: '',
     email: '',
     rating: 0,
   }
 }

 writeReview() {
   this.setState({
     write: !this.state.write
   })
   console.log(this.state.write)
 }

textEntry() {

}

handleHover() {
  
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
          <p onClick={this.writeReview.bind(this)} style={{color: '#727272', fontSize: "15.3px",  cursor: "pointer"}}>Write a review</p>
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

    {this.state.write &&
    <div className="writeReviewBox">
      <form style={{width: '100%', height: '100%'}}>
        <textarea className="entry" name="name" placeholder="Name" value={this.state.name} ></textarea>
        <textarea className="entry" name="email" placeholder="Email" value={this.state.email} ></textarea>
        <textarea className="entry" name="review" placeholder="Please give your feedback" value={this.state.review} ></textarea>
        <div className="starRating">
          <div className="star 1"></div>
          <div className="star 2"></div>
          <div className="star 3"></div>
          <div className="star 4"></div>
          <div className="star 5"></div>
        </div>
      </form>
    </div>}


  </div>

    );
  }
}




export default ReviewsShopPage;
