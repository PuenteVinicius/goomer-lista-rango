import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import cardGridReducer from '../containers/card-grid/cardGridReducer';
import searchrestaurantsReducer from '../containers/search-restaurants/searchrestaurantsReducer';

const reducers = combineReducers({
  form: formReducer,
  cardGrid: cardGridReducer,
  searchRestaurants: searchrestaurantsReducer 
})

export default reducers;