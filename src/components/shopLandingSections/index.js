import React, { Component } from 'react';
import './shopLandingSections.css';
import {Link} from 'react-router-dom';

export class SLSections extends Component {




render() {

  return(
  <div>
    <div className="sectionsContainer">
    <div style={{width: '710px', height: '100%', margin: '0 auto'}}>
    <div className="picCanvas">
    </div>
    <div className="contentCanvas">
      <div className="titleBox"><Link to={this.props.route}><h1 className="typeTitle">{this.props.type}</h1></Link></div>
      <h1 className="itemText">Bundles</h1>
      <h1 className="itemText">Lace</h1>
      <h1 className="itemText">Bundles + Lace</h1>
    </div>
    </div>
    </div>


  </div>
    );
  }
}




export default SLSections;
