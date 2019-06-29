import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ScreenHome from '../screens/home'
import Header from '../components/header'
export default props => (
  <Router>
    <Header/>
    <Route path='/' component={ScreenHome} />
    <Redirect from='*' to='/' />
  </Router>
);
