import { combineReducers } from 'redux'
import gridRestaurantsReducer from '../containers/grid-restaurants/gridRestaurantsReducer';
import searchrestaurantsReducer from '../containers/search-restaurants/searchrestaurantsReducer';
import menuReducer from '../containers/menu/menuReducer';

const reducers = combineReducers({
  gridRestaurants: gridRestaurantsReducer,
  searchRestaurants: searchrestaurantsReducer,
  menu: menuReducer 
})

export default reducers;