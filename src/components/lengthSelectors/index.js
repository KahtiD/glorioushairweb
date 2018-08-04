import React, { Component } from 'react';
import './lengthSelectors.css';
// import {Link} from 'react-router-dom';

export class SeperateLSB extends Components {

  render() {
    return(
        <div className={this.props.showL1 ? "selectorNBox" : "selectorLBox"} onClick={this.handleSelectL1.bind(this)}>
          <h1 className="selectorTextL">{this.props.lengths}</h1>
        </div>
    );
  }
}





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
  const handleSelectL1 = this.handleSelectL1.bind(this);
  const handleSelectL2 = this.handleSelectL2.bind(this);
  const showL1 = this.state.showL1;
  const showL2 = this.state.showL2;
  return(
  <div>
      <div style={{width: '47.5%', margin: '0 auto', height: '43px', position: 'absolute', zIndex: '2'}}>

        <div style={{width: '542px', height: '100%', margin: '0 auto'}}>
          <div className={this.state.showL1 ? "selectorNBox" : "selectorLBox"} onClick={this.handleSelectL1.bind(this)}>
            <h1 className="selectorTextL">{this.props.lengths}</h1>
          </div>

          <div style={{width: '16px', height: '43px', display: 'inline-block'}}></div>

          <div className={this.state.showL2 ? "selectorNBox" : "selectorLBox"} onClick={this.handleSelectL2.bind(this)}>
            <h1 className="selectorTextL">{this.props.lengths}</h1>
          </div>
        </div>

      </div>

      <div style={{width: '568px', height: '43px', margin: '0 auto'}}>
        <div style={{width: '276px', height: '43px', position: 'relative', zIndex: '1' , display: 'inline-block'}}>
          {this.state.showL1 &&
            <div className="selectedLBox">
              <h1 className="selectorTextL">{this.props.lengths}</h1>
            </div>
          }
        </div>

        <div style={{width: '16px', height: '43px', display: 'inline-block'}}></div>

        <div style={{width: '276px', height: '43px', position: 'relative', zIndex: '1' , display: 'inline-block'}}>

          {this.state.showL2 &&
            <div className="selectedRBox">
              <h1 className="selectorTextL">{this.props.lengths}</h1>
            </div>
          }
        </div>
      </div>

  </div>

    );
  }
}




export default LengthSelectorButtons;
