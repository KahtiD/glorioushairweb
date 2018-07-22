import React, { Component } from 'react';
import './shopMainLeft.css';
import Left from '../../images/left.png';
import Right from '../../images/right.png';
import Tweet from '../../images/twittersign.png';
import Pin from '../../images/pinterestsign.png';
import FShare from '../../images/facebooksign.png';
// import {Link} from 'react-router-dom';


const topCanvas = {
  width: '350.3px',
  height: '329.8px',
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.24)',
  marginBottom: '143px'
}

const bottomCanvas = {
  width: '350.3px',
  height: '329.8px',
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.24)'
}

const middleCanvas = {
  width: '422.1px',
  height: '396.17px',
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

  <div style={{display: 'inline-block'}}>
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
          <img src={Left} alt="leftbutton" width="90px" height="90px" className="topButton" onClick={this.upClick.bind(this)}></img>
          <img src={Right} alt="rightbutton" width="90px" height="90px"className="downButton" onClick={this.downClick.bind(this)}></img>
      </div>

    </div>
  </div>

    );
  }
}




export default MainLeft;
