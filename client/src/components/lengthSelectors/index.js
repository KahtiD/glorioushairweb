import React, { Component } from 'react';
import './lengthSelectors.css';
// import {Link} from 'react-router-dom';

export class LengthSelectorButtons extends Component {
  constructor(props) {
   super(props);

   this.state = {

   }
 }





render() {
  const { evenArray, oddArray, evenIndex, oddIndex  } = this.props;

  return(
  <div>
      <div style={{margin: '0 auto', width: '569px', height: '100%'}}>
          <div style={{display: 'inline-block', verticalAlign: "top"}}>
            {evenArray.map( (p, i) => {
              return (
              <div key={p.id} className={evenIndex === i ? "selectedRBox" : "selectorRBox"} onClick={() => this.props.handleSelectL1(i)}>
                <h1 className="selectorTextL">{p.attributes[0].option}</h1>
              </div>
            )})}
          </div>

          <div style={{width: '16px', height: '100%', display: 'inline-block'}}></div>

          <div   style={{display: 'inline-block', verticalAlign: "top" }}>
            {oddArray.map( (p,i) => {
              return(
                <div key={p.id} className={oddIndex === i ? "selectedLBox" : "selectorLBox"} onClick={() => this.props.handleSelectL2(i)}>
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
