import React, { Component } from 'react';
import './Menu.css';
import MenuIcon from '../../images/MenuIcon.svg';
import BasketIcon from '../../images/BasketIcon.svg';
import Logo from '../../images/whiteHands.png';
import {Link} from 'react-router-dom';

export class Menu extends Component {




render() {

  return(
  <div>
    <div className={this.props.shoMenu ? "iconsMoved ": "icons"}>
      <img src={MenuIcon} onClick={this.props.movBody} className="MenuIcon" alt="icon1" />
      <img src={BasketIcon} className="BasketIcon" alt="icon2" />
    </div>


        { this.props.shoMenu &&
            <div style={{ width: '100%', height: '120px', margin: '0 auto', paddingTop: '110px'}}>
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

      </div>



    );
  }
}




export default Menu;
