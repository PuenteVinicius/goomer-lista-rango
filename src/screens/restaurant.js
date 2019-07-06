import React from "react";

import Container from "@material-ui/core/Container";

import RestaurantHeader from "../components/restaurantHeader/restaurantHeader";
import SearchMeals from "../containers/search-meals/searchMeals";
import Menu from "../containers/menu/menu";

import store from "../config/store";

import {FIRST_ELEMENT} from "../constants";

export default props => {
  
  const storedRestaurants = store.getState().restaurants.restaurants;
  const restaurantId = props.match.params.restaurantId;
  const storedRestaurant = storedRestaurants.filter(restaurant => restaurant.id === parseInt(restaurantId));

  const restaurant = storedRestaurant[FIRST_ELEMENT];
  
  return (
    <Container fixed>
      <RestaurantHeader value={{ restaurant }} />
      <SearchMeals id={{ restaurantId }} />
      <Menu value={{ restaurant }} />
    </Container>
  );
};
