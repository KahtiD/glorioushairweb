import React, { Component } from 'react';
import './shopMainLeft.css';
import Left from '../../images/left.png';
import Right from '../../images/right.png';
import Tweet from '../../images/twittersign.png';
import Pin from '../../images/pinterestsign.png';
import FShare from '../../images/facebooksign.png';
import hairImage1 from '../../images/DefaultBundlePic.jpg';
import hairImage2 from '../../images/placeholder2.jpg';
import hairImage3 from '../../images/placeholder3.jpg';
// import {Link} from 'react-router-dom';

export class MainLeft extends Component {
  constructor(props) {
   super(props);

   this.state = {
      imageCount: 1,
      middle: false,
      top: false,
      bottom: false,
      image1: hairImage1,
      image2: hairImage2,
      image3: hairImage3

   }
  }

  downSlide() {
      this.setState((prevState) => ({
        imageCount: (prevState.imageCount + 1)
      }));
      if (this.state.imageCount === 3) {
        this.setState({
          imageCount: 1,
        });
      }
  }


  upSlide() {
      this.setState({
        imageCount: this.state.imageCount === 1 ? 3 : this.state.imageCount - 1,
      });
    }


render() {
  const one = this.props.productAllData.images && this.props.productAllData.images[0] && this.props.productAllData.images[0].src;
  const two = this.props.productAllData.images && this.props.productAllData.images[1] && this.props.productAllData.images[1].src;
  const three = this.props.productAllData.images && this.props.productAllData.images[2] && this.props.productAllData.images[2].src;


  return(

  <div style={{display: 'inline-block', verticalAlign: 'top'}}>
    <div className="mainLeftContainer">

      <div className="verticalCarousel">

        <div className="frontCanvas">
          <div style={this.state.imageCount === 1 ? {backgroundImage: `url(${one})`} :
                      this.state.imageCount === 2 ? {backgroundImage: `url(${two})`} : {backgroundImage: `url(${three})`}}  className="mmiddleCanvas"></div>
          </div>
        <div className="backCanvas">
          <div style={this.state.imageCount === 2 ? {backgroundImage: `url(${three})`} :
                      this.state.imageCount === 3 ? {backgroundImage: `url(${one})`} : {backgroundImage: `url(${two})`}}
                      className="mtopCanvas"
                      onClick={this.downSlide.bind(this)}></div>

          <div style={this.state.imageCount === 3 ? {backgroundImage: `url(${two})`} :
                      this.state.imageCount === 1 ? {backgroundImage: `url(${three})`} : {backgroundImage: `url(${one})`}}
                      className="mbottomCanvas"
                      onClick={this.upSlide.bind(this)}></div>
        </div>
      </div>



        <div style={{width: '331.7px', height: '21.10px', margin: ' 0 auto', paddingTop: '32.4px'}}>
          <div style={{display: 'inline-block' , marginRight: '45px'}}>
            <img src={FShare} alt="fshare" style={{display: 'inline-block', paddingRight: '13.5px', position: 'relative', top: '5.4px'}}></img>
            <h1 className="socialsTitle">Share</h1>
          </div>
          <div style={{display: 'inline-block', marginRight: '45px'}}>
            <img src={Tweet} alt="tweet"  style={{display: 'inline-block', paddingRight: '13.5px', position: 'relative', top: '5.4px'}}></img>
            <h1 className="socialsTitle">Tweet</h1>
          </div>
          <div style={{display: 'inline-block'}}>
            <img src={Pin} alt="pin" style={{display: 'inline-block', paddingRight: '13.5px', position: 'relative', top: '5.4px'}}></img>
            <h1 className="socialsTitle">Pin</h1>
          </div>
        </div>



      <div style={{width: '100%', height: '100px', position: 'relative', bottom: '470.34px', zIndex: '3'}}>
          <img src={Left} alt="leftbutton" width="90px" height="90px" className="topButton" onClick={this.upSlide.bind(this)}></img>
          <img src={Right} alt="rightbutton" width="90px" height="90px"className="downButton" onClick={this.downSlide.bind(this)}></img>
      </div>

    </div>
  </div>

    );
  }
}




export default MainLeft;
