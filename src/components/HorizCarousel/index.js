import React, { Component } from 'react';
import './HorizCarousel.css';
import Left from '../../images/left.png';
import Right from '../../images/right.png';
import {Link} from 'react-router-dom';




const stylesFrontSlide = {
  width: '648px',
  height: '518px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.24)',
  margin: '0 auto'
}

const stylesLeftSlide = {

  backgroundColor: '#FFFFFF',
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.24)',
  width: '505px',
  height: '388px',
  display: 'inline-block',
  marginRight: '50px'
}

const stylesRightSlide = {

  backgroundColor: '#FFFFFF',
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.24)',
  width: '505px',
  height: '388px',
  display: 'inline-block',
}


export class HorizCarousel extends Component {
  constructor(props) {
   super(props);

   this.state = {
      slideImage : 0,

   }
 }

 handleClick(){
   this.setState((prevState) => ({
     slideImage: (prevState.slideImage + 1) % 3,
   }));
 }

 handleClick2(){
   this.setState((prevState) => ({
     slideImage: (prevState.slideImage + 1) % 3,
   }));
 }




render() {
const {slideImage} = this.state;
const imgtype = slideImage === 0 ? "img1" :
                      slideImage === 1 ? "img2" : "img3"

const imgtypeR = slideImage === 0 ? "img2" :
                     slideImage === 1 ? "img3" : "img1"


const imgtypeL = slideImage === 0 ? "img3" :
                     slideImage === 1 ? "img1" : "img2"



var selfChange = setTimeout( this.handleClick.bind(this) , 5000);


  return (
      <div className="container">

        <div style={{width: '100%', zIndex: '1', position:'absolute', marginTop:'246px'}}>
          <img src={Left} alt="leftbutton" width="150px" height="150px" className="l" onClick={this.handleClick2.bind(this)}></img>
          <img className="r" src={Right} alt="rightbutton" width="150px" height="150px" onClick={this.handleClick.bind(this)}></img>
        </div>

        <div className="backPhotos">
            <div style={{width: '1060px', margin: '0 auto'}}>
          <div style={stylesLeftSlide} onload={selfChange} className={this.state.slideImage ? imgtypeL : "img3"}></div>
          <div style={stylesRightSlide} onload={selfChange} className={this.state.slideImage ? imgtypeR : "img2"}></div>
            </div>
        </div>

         <div className="topPhoto">
            <div style={stylesFrontSlide} onload={selfChange} className={this.state.slideImage ? imgtype : "img1"  }></div>
            <div style={{zIndex: '4', height:'100%', margin: '0 auto', marginTop: '-100px', width: '239px'}}>
              <Link to="/shopLanding"><button className="shop-button">Shop Now</button></Link>
            </div>

           <div style={{width: '100px', height: '20px', margin: '0 auto', marginTop: '95px'}}>
             <div className={this.state.slideImage === 0 ? 'Shown' : 'NotShown' }></div>
             <div className={this.state.slideImage === 1 ? 'Shown' : 'NotShown' }></div>
             <div className={this.state.slideImage === 2 ? 'Shown' : 'NotShown' }></div>
          </div>
        </div>

      </div>
  );
}
}


export default HorizCarousel;
