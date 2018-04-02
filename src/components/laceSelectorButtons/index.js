import React, { Component } from 'react';
import './laceSelectorButtons.css';
// import {Link} from 'react-router-dom';


export class LaceSelectorButtons extends Component {
  constructor(props) {
   super(props);

   this.state = {
      show1 : false,
      show2 : false,
   }
 }

 handleSelect1 = () => {
   this.setState({
     show1: !this.state.show1,
     show2: false
   })
     console.log(this.state.show);
 }

 handleSelect2 = () => {
   this.setState({
     show2: !this.state.show2,
     show1: false
   })
     console.log(this.state.show);
 }


render() {

  return(
  <div>
      <div style={{width: '556px', margin: '0 auto', height: '52px'}}>
          <div className={ this.state.show1 ? "selectedBox" : "selectorBox"} onClick={this.handleSelect1.bind(this)}>
            <h1 className="selectorText">Frontal</h1>
          </div>
          <div className={ this.state.show2 ? "selectedBox" : "selectorBox"} onClick={this.handleSelect2.bind(this)}>
            <h1 className="selectorText">Closure</h1>
          </div>

      </div>
  </div>

    );
  }
}




export default LaceSelectorButtons;
