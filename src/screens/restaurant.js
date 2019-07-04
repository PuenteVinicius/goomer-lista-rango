import React from "react";

import Container from "@material-ui/core/Container";

import RestaurantHeader from "../components/restaurantHeader";
import SearchMeals from "../containers/search-meals/searchMeals";
import Menu from "../containers/menu/menu";

import store from "../config/store";

export default props => {
  
  const storedRestaurants = store.getState().restaurants.restaurants;
  const restaurantId = props.match.params.restaurantId;
  const storedRestaurant = storedRestaurants.filter(elem => elem.id === parseInt(restaurantId));

  const restaurant = storedRestaurant[0];
  
  return (
    <Container fixed>
      <RestaurantHeader value={{ restaurant }} />
      <SearchMeals id={{ restaurantId }} />
      <Menu value={{ restaurant }} />
    </Container>
  );
};
