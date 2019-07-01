import { combineReducers } from 'redux'
import RestaurantsReducer from '../containers/restaurants/restaurantsReducer';
import searchrestaurantsReducer from '../containers/search-restaurants/searchrestaurantsReducer';
import menuReducer from '../containers/menu/menuReducer';

const reducers = combineReducers({
  Restaurants: RestaurantsReducer,
  searchRestaurants: searchrestaurantsReducer,
  menu: menuReducer 
})

export default reducers;