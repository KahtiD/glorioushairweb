import React, { Component } from 'react';
import './Home.css';
import {Footer, HorizCarousel, AboutUs, Menu, HomepageStyle} from '../../components';
import {Link} from 'react-router-dom';

export class Home extends Component {
  constructor(props) {
   super(props);

   this.state = {
      showMenu : false,
   }
  }

menuShow = () => {
console.log(this.state.showMenu)
  this.setState({
    showMenu : !this.state.showMenu
  });
}

  render() {

    return (
      <div>
        <div className="Header">
          <p className="text1">Standard Shipping for UK orders</p>
          <Menu movBody={this.menuShow.bind(this)} shoMenu={this.state.showMenu} ></Menu>
        </div>

        <div className={ this.state.showMenu ? "moveSpacing1" : "body"}>
          <HorizCarousel></HorizCarousel>
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
        </div>

        <Footer></Footer>

      </div>
    );
  }
}

export default Home;
