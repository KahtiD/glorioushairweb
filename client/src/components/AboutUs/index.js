import React, {Component} from 'react';
import './AboutUs.css';



export class AboutUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: [],
      title: [],
    }
  }

  componentDidMount(){
   const pageURL = "http://localhost:8888/wp-json/wp/v2/content_text/20";
   fetch(pageURL)
   .then(response => response.json())
   .then(response => {
     this.setState({
       content: response.content.rendered,
       title: response.title.rendered,
     });
   })
 }

render() {
let content = this.state.content;
return (
 <div className="AboutUsContainer">
   <div className="titleAU"><h1>{this.state.title}</h1></div>
     <div className="Bio">
      <p dangerouslySetInnerHTML={{__html: content}}></p>
     </div>
 </div>
  )
  }

}

export default AboutUs;
