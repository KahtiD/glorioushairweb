import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home, ContactForm, shopLanding, ShopPages } from '../containers';






export default () => (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/contactus" exact component={ContactForm}/>
              <Route path="/shop" exact component={shopLanding}/>
              <Route path="/product-page" exact component={ShopPages}/>
          </Switch>
        </BrowserRouter>
);
