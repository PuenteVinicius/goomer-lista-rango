import React from "react";

import Container from "@material-ui/core/Container";

import RestaurantHeader from "../components/restaurantHeader";
import SearchMeals from "../containers/search-meals/searchMeals";
import Menu from "../containers/menu/menu";

import store from "../store/store";

export default props => {

  const storedRestaurant = store.getState().Restaurants.restaurants;
  const cardId = props.match.params.cardId;
  const restaurant = storedRestaurant.filter(elem => {
    return elem.id == cardId;
  });
  const card = restaurant[0];

  return (
    <Container fixed>
      <RestaurantHeader value={{ card }} />
      <SearchMeals />
      <Menu value={{ card }} />
    </Container>
  );
};
