import React, { Component } from 'react';
import './shopLanding.css';
import {Footer, Header, ThreeSC} from '../../components';


export class shopLanding extends Component {
  constructor(props) {
   super(props);

   this.state = {
      showMenu : false,
      data: [],
      texture: [],
      pattern: [],
      brazilianHair: [],
      peruvianHair: [],
      malaysianHair: [],
      straight: [],
      curly: [],
      wavy: [],
   }
  }

menuShow = () => {
  this.setState({
    showMenu : !this.state.showMenu
  });
}

async componentDidMount() {
  const response = await fetch('/products');
  const json = await response.json();
  console.log('htmlJson', json);
  this.setState({
    data: json,
  })
  if (this.state.data.length === 0 ) {
    console.log('waiting');
  }

  this.state.data.forEach((product, i) => {
    product.description === '<p>Brazilian</p>\n' && this.state.brazilianHair.push(product);
    product.description === '<p>Peruvian</p>\n' && this.state.peruvianHair.push(product);
    product.description === '<p>Malaysian</p>\n' && this.state.malaysianHair.push(product);

    product.categories.forEach( (category, i) =>  {
      category.name === 'Straight' && this.state.straight.push(product);
      category.name === 'Curly' && this.state.curly.push(product);
      category.name === 'Wavy' && this.state.wavy.push(product);
    })
  })
  this.state.texture.push(this.state.brazilianHair, this.state.peruvianHair, this.state.malaysianHair);
  this.state.pattern.push(this.state.straight, this.state.curly, this.state.wavy);

}


render() {
  return(
    <div>
      <Header moveBody={this.menuShow.bind(this)} showMenu={this.state.showMenu}></Header>

        <ThreeSC shopTitle="Shop Style"
                 leftCardTitle="Straight" centerCardTitle="Curly" rightCardTitle="Wavy"
                 left={this.state.straight} center={this.state.curly}
                 right={this.state.wavy} />


        <ThreeSC shopTitle="Shop Texture"
                 leftCardTitle="Brazilian" centerCardTitle="Malaysian" rightCardTitle="Peruvian"
                 left={this.state.brazilianHair} center={this.state.malaysianHair}
                 right={this.state.peruvianHair}/>

    <Footer></Footer>
    </div>

    );
  }
}


export default shopLanding;
