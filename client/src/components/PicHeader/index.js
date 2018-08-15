import React, { Component } from 'react';
import './PicHeader.css';
import '../Menu/Menu.css';
import hairImage from '../../images/curlyHair.jpg';
import {Link} from 'react-router-dom';

export class PicHeader extends Component {
constructor(props) {
  super(props);
  this.state = {
    hide: false,
    swap: false,
  }
}

changeDiv() {
  this.setState({
    swap: true,
  });
}

resetDiv(){if (this.state.swap === true) {
  this.setState({
    swap: false,
  });
}
}

handleHover = () => {
      this.setState({
        hide: true,
      });

  }
  componentDidMount() {
      window.addEventListener("scroll", this.handleHover);
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleHover);
    }
  render() {
    console.log(this.state.hide);
    return(
      <div onScroll={this.handleHover.bind(this)}>
        { this.state.hide &&
            <div style={{ width: '100%', height: '120px', margin: '0 auto', position: 'absolute', zIndex: '100'}}>
              <div className="menuContainer">
                <nav>
                    <Link to="/" className="linkTitle" href="">Home</Link>
                    <Link to="/shop" className="linkTitle" href="">Shop</Link>
                    <a className="linkTitle" href="#aboutus">About</a>
                    <Link to="/contactus" className="linkTitle" href="">Contact Us</Link>
                    <a className="linkTitle" href="">As seen</a>
                </nav>
              </div>
            </div>
          }
        <div className="highLevelContainer" style={{zIndex: '2'}}>
          <div className="picContainer">
            <div onMouseOver={this.resetDiv.bind(this)} style={{backgroundImage: `url(${hairImage})`}} className="picSection one"></div>
            <div onMouseOver={this.resetDiv.bind(this)}className="picSection two"></div>
            <div onMouseOver={this.resetDiv.bind(this)} className="picSection three"></div>
            <div onMouseOver={this.changeDiv.bind(this)} className="picSection four"></div>
          </div>
          <div onMouseOver={this.resetDiv.bind(this)} className="picContainer2">
            <div className={this.state.swap ? "picSection five:disabled" : "picSection five"}></div>
          </div>
        </div>
        {this.state.swap &&
        <div style={{width:'100%', height:'866px', zIndex: '1', position: 'absolute', top: '0px'}}>
          <div className="lowLevel"></div>
        </div>}
      </div>
    );
  }
}

export default PicHeader;
