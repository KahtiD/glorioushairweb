import React, { Component } from 'react';
import './Home.css';
import {Footer, PicHeader, AboutUs, HomepageStyle} from '../../components';
import {Link} from 'react-router-dom';

export class Home extends Component {

  render() {
    return (
      <div>
          <PicHeader></PicHeader>
          <div id="aboutus">
          <AboutUs></AboutUs>
          </div>
          <HomepageStyle></HomepageStyle>
          <div className="contactusContainer">
            <p>Have a look in mind but don’t know which extentions to go for?<br></br>
              Contact us with your inspiration image and we’ll put you in the right direction.</p>
            <Link to="/contactus"><div className="cuButton"><h1>Contact Us</h1></div></Link>
            <div className="line"></div>
          </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
