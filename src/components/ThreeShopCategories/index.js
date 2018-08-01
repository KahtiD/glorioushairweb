import React, { Component } from 'react';
import './ThreeShopCategories.css';
import {SLSections} from '../../components';

export class ThreeSC extends Component {
  constructor(props) {
   super(props);

   this.state = {
      tabPressed1 : false,
      tabPressed2 : false,
      tabPressed3 : false,
      showPressed : false
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

  render() {
    return (
      <div>
      <div className="landingContainerBody">
        <h1 className="shopTitle">{this.props.shopTitle}</h1>
        <div style={{margin: '0 auto', marginTop: '50px', width: '1156px'}}>
          <div className={this.state.tabPressed1 ? "shapePressed" : "shape"} style={{marginRight: '80px'}}></div>
          <div className={this.state.tabPressed2 ? "shapePressed" : "shape"} style={{marginRight: '80px'}}></div>
          <div className={this.state.tabPressed3 ? "shapePressed" : "shape"}></div>
        </div>

        <div style={{width: '100%', height: '80px'}}>
          <div className="titleCard">
            <div onClick={this.handleClick1.bind(this)} className="defaultL">
                <h1 className="type">{this.props.leftCardTitle}</h1>
            </div>
            <div onClick={this.handleClick2.bind(this)} className="defaultC">
                <h1 className="type">{this.props.centerCardTitle}</h1>
            </div>
            <div onClick={this.handleClick3.bind(this)} className="defaultR">
                <h1 className="type">{this.props.rightCardTitle}</h1>
            </div>
          </div>
        </div>

        {this.state.tabPressed1 &&
          <div>
            <SLSections type="Brazilian" route="/loosewave"></SLSections>
          </div>
        }
        {this.state.tabPressed2 &&
          <div>
            <SLSections type="Kinky Curly" route="/loosewave"></SLSections>
          </div>
        }
        {this.state.tabPressed3 &&
          <div>
            <SLSections type="Loose Wave" route="/loosewave"></SLSections>
          </div>
        }
      </div>
    </div>
    );
  }
}

export default ThreeSC;