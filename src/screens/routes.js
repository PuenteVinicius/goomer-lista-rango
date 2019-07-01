import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ScreenHome from '../screens/home'
import ScreenRestaurant from '../screens/restaurant'

import Header from '../components/header'
export default props => (
  <Router>
    <header>
      <Header/>
    </header>
    <main>
      <Route exact path='/' component={ScreenHome} />
      <Route exact path='/restaurant/:cardId' component={ScreenRestaurant} />
    </main>
    <Redirect from='*' to='/' />  
  </Router>
);
