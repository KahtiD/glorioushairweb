import React, {Component} from 'react';
import './Header.css';
import {Menu} from '../../components';
import Logo from '../../images/whiteHands.png';
import {Link} from 'react-router-dom';




export class Header extends Component {

  render() {
    return(

      <div className="headerContainer">
       <div style={{ positon: 'absolute', zIndex: '2', width: '101.768px', margin: '0 auto'}}>
         <Link to="/"><img src={Logo} alt='Logo' className={this.props.showMenu ? 'hide' : 'logo'}/></Link>
       </div>
       <div className={this.props.showMenu ? 'show' : 'noShow'}>
        <Menu movBody={this.props.moveBody} shoMenu={this.props.showMenu} cart={this.props.cart}></Menu>
        </div>
      </div>


    );
  }
}


export default Header;
