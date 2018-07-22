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
            <div style={{ width: '1299px', height: '278px', margin: '0 auto', paddingTop: '110px'}}>
              <div style={{ zIndex: '0', position: 'absolute'}}>
                <img className="Logo" src={Logo} alt='logo'></img>
              </div>
              <div className="menuContainer">
                <nav>
                  <div className="home">
                    <Link to="/" className="linkTitle" href="">Home</Link>
                  </div>
                  <div className="shop">
                    <Link to="/shop" className="linkTitle" href="">Shop</Link>
                        <a className="list" href="">Straight</a>
                        <a className="list" href="">Curly</a>
                        <a className="list" href="">Wavy</a>
                    </div>
                  <div className="about">
                    <a className="linkTitle" href="#aboutus">About</a>
                  </div>
                  <div className="contactus">
                    <a className="linkTitle" href="">Contact Us</a>
                  </div>
                  <div className="asseen">
                    <a className="linkTitle" href="">As seen</a>
                  </div>
                </nav>
              </div>
            </div>

         }

      </div>



    );
  }
}




export default Menu;
