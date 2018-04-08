import React, { Component } from 'react';
import './lengthSelectors.css';
// import {Link} from 'react-router-dom';


export class LengthSelectorButtons extends Component {
  constructor(props) {
   super(props);

   this.state = {
      showL1 : false,
      showL2 : false,
   }
 }

 handleSelectL1 = () => {
   this.setState({
     showL1: !this.state.showL1,
     showL2: false
   })

 }

 handleSelectL2 = () => {
   this.setState({
     showL2: !this.state.showL2,
     showL1: false
   })
 }


render() {

  return(
  <div>
      <div style={{width: '602px', margin: '0 auto', height: '34.84px'}}>
          <div className={ this.state.showL1 ? "selectedLBox" : "selectorLBox"} onClick={this.handleSelectL1.bind(this)}>
            <h1 className="selectorTextL">{this.props.lengths}</h1>
          </div>
          <div className={ this.state.showL2 ? "selectedLBox" : "selectorLBox"} onClick={this.handleSelectL2.bind(this)}>
            <h1 className="selectorTextL">{this.props.lengths}</h1>
          </div>

      </div>
  </div>

    );
  }
}




export default LengthSelectorButtons;
