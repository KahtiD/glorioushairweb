import React, { Component } from 'react';
import './shopMainLeft.css';
import Left from '../../images/left.png';
import Right from '../../images/right.png';
import Tweet from '../../images/twittersign.png';
import Pin from '../../images/pinterestsign.png';
import FShare from '../../images/facebooksign.png';
// import {Link} from 'react-router-dom';


const topCanvas = {
  width: '381px',
  height: '347px',
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.24)',
  marginBottom: '260px'
}

const bottomCanvas = {
  width: '381px',
  height: '347px',
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.24)'
}

const middleCanvas = {
  width: '500px',
  height: '457px',
  margin: '0 auto',
  boxShadow: '0px 5px 54px 0px rgba(103, 18, 124, 0.5)'
}

export class MainLeft extends Component {
  constructor(props) {
   super(props);

   this.state = {
      vslideImage : 0,

   }
  }

  downClick(){
   this.setState((prevState) => ({
     vslideImage: (prevState.vslideImage + 1) % 3,
   }));
  }

  upClick(){
   this.setState((prevState) => ({
     vslideImage: (prevState.vslideImage + 1) % 3,
   }));
  }

render() {
  const {vslideImage} = this.state;
  const vimgtype = vslideImage === 0 ? "img1" :
                        vslideImage === 1 ? "img2" : "img3"

  const vimgtypeB = vslideImage === 0 ? "img2" :
                       vslideImage === 1 ? "img3" : "img1"


  const vimgtypeT = vslideImage === 0 ? "img3" :
                       vslideImage === 1 ? "img1" : "img2"

  return(

  <div>
    <div className="mainLeftContainer">
      <div className="verticalCarousel">
        <div className="frontCanvas">
          <div style={middleCanvas} className={this.state.vslideImage ? vimgtype : "img1"}></div>
        </div>
        <div className="backCanvas">
          <div style={topCanvas} className={this.state.vslideImage ? vimgtypeT : "img3"}></div>
          <div style={bottomCanvas} className={this.state.vslideImage ? vimgtypeB : "img2"}></div>
        </div>
      </div>

        <div style={{width: '411px', height: '35px', margin: ' 0 auto', paddingTop: '36px'}}>
          <div style={{display: 'inline-block' , marginRight: '50px'}}>
            <img src={FShare} alt="fshare" style={{display: 'inline-block', paddingRight: '15px', position: 'relative', top: '6px'}}></img>
            <h1 className="socialsTitle">Share</h1>
          </div>
          <div style={{display: 'inline-block', marginRight: '50px'}}>
            <img src={Tweet} alt="tweet"  style={{display: 'inline-block', paddingRight: '15px', position: 'relative', top: '6px'}}></img>
            <h1 className="socialsTitle">Tweet</h1>
          </div>
          <div style={{display: 'inline-block'}}>
            <img src={Pin} alt="pin" style={{display: 'inline-block', paddingRight: '15px', position: 'relative', top: '6px'}}></img>
            <h1 className="socialsTitle">Pin</h1>
          </div>
        </div>




      <div style={{width: '100%', height: '150px', position: 'relative', bottom: '653px', zIndex: '3'}}>
          <img src={Left} alt="leftbutton" width="150px" height="150px" className="topButton" onClick={this.upClick.bind(this)}></img>
          <img src={Right} alt="rightbutton" width="150px" height="150px"className="downButton" onClick={this.downClick.bind(this)}></img>
      </div>

    </div>
  </div>

    );
  }
}




export default MainLeft;
