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
      showPressed : false,
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
    const { left, center, right} = this.props;
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
          {left.map( (item, i) => {
            return (<SLSections key={item.id} type={left[i] && left[i].name}
                                slug={left[i].slug} image={left[i] && left[i].images[0].src}
                                idNumber={left[i].id}/>)
          })}
          </div>
        }

        {this.state.tabPressed2 &&
          <div>
          {center.map( (item, i) => {
            return (<SLSections key={item.id} type={center[i] && center[i].name}
                                slug={center[i].slug} image={center[i] && center[i].images[0].src}
                                idNumber={center[i].id}/>)
          })}
          </div>
        }
        {this.state.tabPressed3 &&
          <div>
          {right.map( (item, i) => {
            return (<SLSections key={item.id} type={right[i] && right[i].name}
                                slug={right[i].slug} image={right[i] && right[i].images[0].src}
                                idNumber={right[i].id}/>)
          })}
          </div>
        }
      </div>
    </div>
    );
  }
}

export default ThreeSC;
