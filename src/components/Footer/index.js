import React, {Component} from 'react';
import './Footer.css';
import WrittenLogo from '../../images/WrittenLogo.svg';
import InstaPurple from '../../images/InstaPurple.svg';
import {Link} from 'react-router-dom';




export class Footer extends Component {

render() {

  return(
    <div className="Footercontainer">


      <div className="FooterShape">
          <div className="writtenlogo">
              <Link to="/" href=""><img src={WrittenLogo} alt='logo'/></Link>
            </div>
          <div className="Socials" >
            <a href="https://www.instagram.com/glorioushairuk/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={InstaPurple} className="insta" alt='insta'/>
              <p className="title1">Instagram</p>
            </a>
          </div>

              <div className="Contact">
                <Link to='./contactus'>
                   <p className="title2">Contact</p>
                </Link>
              </div>


      </div>

    </div>


)}
}






export default Footer;
