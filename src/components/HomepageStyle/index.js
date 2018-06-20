import React, { Component } from 'react';
import './HomepageStyle.css';
import {Link} from 'react-router-dom';

export class HomepageStyle extends Component {

render() {

  return(
        <div className="styleContainer">
          <div className="title"><h1>Styles</h1></div>

          <div className="canvasContainer">
            <div className="canvas"></div>
            <div className="canvas"></div>
            <div className="canvas2"></div>
          </div>

          <div className="titleCard">
            <div style={{width: '289px', display: 'inline-block', float: 'left', paddingLeft: '110.5px', paddingRight: '116px'}}>
              <h1 className="type">Straight</h1>
            </div>
            <div style={{width: '289px', display: 'inline-block', margin: '0 auto'}}>
              <h1 className="type">Curly</h1>
            </div>
            <div style={{width: '289px', display: 'inline-block', float: 'right', paddingRight: '110.5px', paddingLeft: '112px'}}>
              <Link to=""><h1 className="type">Wavy</h1></Link>
            </div>
         </div>

        </div>
    );
  }
}




export default HomepageStyle;
