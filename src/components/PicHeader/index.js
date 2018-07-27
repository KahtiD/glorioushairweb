import React, { Component } from 'react';
import './PicHeader.css';
import '../Menu/Menu.css';
import hairImage from '../../images/curlyHair.jpg';
import Logo from '../../images/whiteHands.png';
import {Link} from 'react-router-dom';

export class PicHeader extends Component {
constructor(props) {
  super(props);
  this.state = {
    hide: false,
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
            <div style={{ width: '100%', height: '120px', margin: '0 auto', position: 'absolute'}}>
              <div style={{ zIndex: '0', position: 'absolute', marginLeft: '120px', marginTop: '6px'}}>
                <img className="Logo" src={Logo} alt='logo'></img>
              </div>
              <div className="menuContainer">
                <nav>
                    <Link to="/" className="linkTitle" href="">Home</Link>
                    <Link to="/shop" className="linkTitle" href="">Shop</Link>
                    <a className="linkTitle" href="#aboutus">About</a>
                    <a className="linkTitle" href="">Contact Us</a>
                    <a className="linkTitle" href="">As seen</a>
                </nav>
              </div>
            </div>
          }
        <div className="picContainer">
          <div style={{backgroundImage: `url(${hairImage})`}} className="picSection one"></div>
          <div className="picSection two"></div>
          <div className="picSection three"></div>
          <div className="picSection four"></div>
          <div className="picSectionL five"></div>
        </div>

      </div>
    );
  }
}

export default PicHeader;
