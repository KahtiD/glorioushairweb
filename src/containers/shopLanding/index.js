import React, { Component } from 'react';
import './shopLanding.css';
import {Footer, Header, SLSections, ThreeSC} from '../../components';


export class shopLanding extends Component {
  constructor(props) {
   super(props);

   this.state = {
      showMenu : false,
   }
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
        <ThreeSC shopTitle="Shop Style"
                 leftCardTitle="Straight" centerCardTitle="Curly" rightCardTitle="Wavy">
        </ThreeSC>
        <ThreeSC shopTitle="Shop Texture"
                 leftCardTitle="Brazilian" centerCardTitle="Peruvian" rightCardTitle="Malaysian">
        </ThreeSC>
    <Footer></Footer>
    </div>

    );
  }
}


export default shopLanding;
