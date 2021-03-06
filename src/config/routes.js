import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScreenHome from "../screens/home";
import ScreenRestaurant from "../screens/restaurant";

import Header from "../components/header/header";
export default props => (
  <Router>
    <header>
      <Header />
    </header>
    <main>
      <Route 
        exact path="/" 
        component={ScreenHome} 
      />
      <Route
        exact path="/restaurant/:restaurantId"
        component={ScreenRestaurant}
      />
    </main>
  </Router>
);
