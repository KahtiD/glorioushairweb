import React, { Component } from 'react';
import './shopLanding.css';
import {Footer, Header, SLSections} from '../../components';


export class shopLanding extends Component {
  constructor(props) {
   super(props);

   this.state = {
      tabPressed1 : false,
      tabPressed2 : false,
      tabPressed3 : false,
   }
  }

handleClick1 = () => {
  this.setState({
    tabPressed1 : !this.state.tabPressed1,
    tabPressed2: false,
    tabPressed3: false
  });
}

handleClick2 = () => {
  console.log(this.state.tabPressed2);
  this.setState({
    tabPressed2 : !this.state.tabPressed2,
    tabPressed1: false,
    tabPressed3: false
  });
}

handleClick3 = () => {
  this.setState({
    tabPressed3 : !this.state.tabPressed3,
    tabPressed1: false,
    tabPressed2: false
  });
}

menuShow = () => {
console.log(this.state.showMenu)
  this.setState({
    showMenu : !this.state.showMenu
  });
}

render() {

  return(

    <div>
      <Header moveBody={this.menuShow.bind(this)} showMenu={this.state.showMenu}></Header>
        <div className="landingContainerBody">
          <h1 className="shopTitle">Shop Texture</h1>
          <div style={{margin: '0 auto', marginTop: '50px', width: '1156px'}}>
            <div className={this.state.tabPressed1 ? "shapePressed" : "shape"} style={{marginRight: '80px'}}></div>
            <div className={this.state.tabPressed2 ? "shapePressed" : "shape"} style={{marginRight: '80px'}}></div>
            <div className={this.state.tabPressed3 ? "shapePressed" : "shape"}></div>
          </div>
          <div style={{width: '100%', height: '80px'}}>
            <div className="titleCard">
            <div onClick={this.handleClick1.bind(this)} className="defaultL">
                <h1 className="type">Straight</h1>
              </div>
              <div onClick={this.handleClick2.bind(this)} className="defaultC">
                <h1 className="type">Curly</h1>
              </div>
              <div onClick={this.handleClick3.bind(this)} className="defaultR">
                <h1 className="type">Wavy</h1>
              </div>
            </div>
          </div>

        {this.state.tabPressed3 &&
          <div>
            <SLSections type="Loose Wave" route="/loosewave"></SLSections>
          </div>
        }
        </div>
    <Footer></Footer>
    </div>

    );
  }
}


export default shopLanding;
