import React, { Component } from 'react';
import './shopPages.css';
import {Footer, Header, MainLeft, MainRight, CartSummary} from '../../components';
// import {Link} from 'react-router-dom';


export class shopPages extends Component {
  constructor(props) {
   super(props);
   this.state = {
     showMenu: false,
   }

}

menuShow = () => {
console.log(this.state.showMenu)
  this.setState({
    showMenu : !this.state.showMenu,

  });
}



render() {

  return(

<div>
      <div className="sPagesContainerBody">
        <Header moveBody={this.menuShow.bind(this)} showMenu={this.state.showMenu} ></Header>
          <div className={this.state.showMenu ? "moveSpacing2" : "containerBody"}>
              <MainLeft></MainLeft>
              <MainRight hairPatternName="Loose Wave" hairTextureName="Brazillian" ></MainRight>
          </div>
        <Footer></Footer>
      </div>
</div>

    );
  }
}


export default shopPages;
