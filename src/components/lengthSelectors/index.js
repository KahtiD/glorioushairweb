import React, { Component } from 'react';
import './lengthSelectors.css';
// import {Link} from 'react-router-dom';

export class LengthSelectorButtons extends Component {
  constructor(props) {
   super(props);

   this.state = {
     oddSelected: null,
     evenSelected: null
   }
 }

 handleSelectL1(i){

   this.setState({
      oddSelected: i,
      evenSelected: null
    });
 }

 handleSelectL2(i){
   this.setState({
      evenSelected: i,
      oddSelected: null
    });

 }


render() {
  const { products, evenArray, oddArray } = this.props;
  return(
  <div>
        <div style={{margin: '0 auto', width: '569px', height: '100%'}}>
          <div style={{display: 'inline-block', verticalAlign: "top"}}>
            {evenArray.map( (p,i) => {
              return (
              <div key={p.id} className={this.state.oddSelected === i ? "selectedRBox" : "selectorRBox"} onClick={this.handleSelectL1.bind(this, i)}>
                <h1 className="selectorTextL">{p.attributes[0].option}</h1>
              </div>
            )})}
          </div>

          <div style={{width: '16px', height: '100%', display: 'inline-block'}}></div>

          <div   style={{display: 'inline-block', verticalAlign: "top" }}>
            {oddArray.map( (p,i) => {
              return(
                <div key={p.id} className={this.state.evenSelected === i ? "selectedLBox" : "selectorLBox"} onClick={this.handleSelectL2.bind(this, i)}>
                  <h1 className="selectorTextL">{p.attributes[0].option}</h1>
                </div>
              )
            })}
          </div>
      </div>
  </div>

    );
  }
}




export default LengthSelectorButtons;
