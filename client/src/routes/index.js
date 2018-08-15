import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home, ContactForm, shopLanding, shopPages } from '../containers';



export default () => (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/contactus" exact component={ContactForm}/>
              <Route path="/shop" exact component={shopLanding}/>
              <Route path="/loosewave" exact component={shopPages}/>
          </Switch>
        </BrowserRouter>
    );
