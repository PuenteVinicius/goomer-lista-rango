import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ScreenMainHome from '../screens/main/home'
import Header from '../components/UI/header'
export default props => (
  <Router>
    <Header/>
    <Route path='/' component={ScreenMainHome}>
    </Route>
    <Redirect from='*' to='/' />
  </Router>
);
