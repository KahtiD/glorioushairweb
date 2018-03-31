import React, { Component } from 'react';
import './shopLanding.css';
import {Footer, Header} from '../../components';


export class shopLanding extends Component {




render() {

  return(

    <div>
      <Header></Header>
        <div className="landingContainerBody">
          <h1 className="shopTitle">Shop Texture</h1>
          <div style={{margin: '0 auto', marginTop: '50px', width: '1150px'}}>
            <div className="shape" style={{marginRight: '80px'}}></div>
            <div className="shape" style={{marginRight: '80px'}}></div>
            <div className="shape"></div>
          </div>
          <div style={{width: '100%', height: '80px'}}>
            <div className="titleCard">
              <div style={{width: '330px', display: 'inline-block', float: 'left', paddingLeft: '84.5px', paddingRight: '80px', marginTop: '9px'}}>
                <h1 className="type">Straight</h1>
              </div>
              <div style={{width: '330px', display: 'inline-block', margin: '0 auto', marginTop: '9px'}}>
                <h1 className="type">Curly</h1>
              </div>
              <div style={{width: '330px', display: 'inline-block', float: 'right', paddingRight: '84.5px', paddingLeft: '80px', marginTop: '9px'}}>
                <h1 className="type">Wavy</h1>
              </div>
            </div>
          </div>
        </div>
    <Footer></Footer>
    </div>

    );
  }
}


export default shopLanding;
