import React, { Component } from 'react';
import './laceSelectorButtons.css';
// import {Link} from 'react-router-dom';


export class LaceSelectorButtons extends Component {
  constructor(props) {
   super(props);

   this.state = {
      show1 : false,
      show2 : false,
      defaultLace: this.props.defaultLace
   }
 }

 handleSelect1 = () => {
   if (this.state.defaultLace !== 'Closure') {
     this.setState({
       show1: !this.state.show1,
       show2: false,
     });
  }
}

 handleSelect2 = () => {
  if (this.state.defaultLace !== 'Frontal') {
   this.setState({
     show2: !this.state.show2,
     show1: false
   })
 }
}


render() {
  const {defaultLace} = this.state;
  return(
  <div>
      <div style={{width: '354.9px', margin: '0 auto', height: '39.36px'}}>
        {defaultLace === 'Frontal' ?
          <div className="selectedBox" onClick={this.handleSelect1.bind(this)}>
            <h1 className="selectorText">Frontal</h1>
          </div>
        :
          <div className={ this.state.show1 ? "selectedBox" : "selectorBox"} onClick={this.handleSelect1.bind(this)}>
            <h1 className="selectorText">Frontal</h1>
          </div>
        }
        <div style={{width: '15px', height: '31.36px', display: 'inline-block'}}></div>

        {defaultLace === 'Closure' ?
          <div className="selectedBox" onClick={this.handleSelect2.bind(this)}>
            <h1 className="selectorText">Closure</h1>
          </div>
        :
        <div className={ this.state.show2 ? "selectedBox" : "selectorBox"} onClick={this.handleSelect2.bind(this)}>
          <h1 className="selectorText">Closure</h1>
        </div>
      }
      </div>
  </div>

    );
  }
}




export default LaceSelectorButtons;
