import { combineReducers } from 'redux'
import RestaurantsReducer from '../containers/restaurants/restaurantsReducer';
import menuReducer from '../containers/menu/menuReducer';

const reducers = combineReducers({
  restaurants: RestaurantsReducer,
  menu: menuReducer 
})

export default reducers;