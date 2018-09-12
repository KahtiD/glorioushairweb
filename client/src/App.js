import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home, ContactForm, shopLanding, ShopPages } from './containers';

export class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     response: [],
   }
 }

  async componentDidMount(){
   const loadingPage = document.getElementById('loadingPage')
   if (loadingPage) {
     setTimeout(() => {
       setTimeout(() => {
         loadingPage.outerHTML = ''
       }, 1000)
     }, 1000)
   }
  }



render() {
  return(
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contactus" exact component={ContactForm}/>
          <Route path="/shop" exact component={shopLanding}/>
          <Route path="/product-page/:slug/:idNumber" exact component={ShopPages}/>)

      </Switch>
    </BrowserRouter>
  )
}
}

export default App;
