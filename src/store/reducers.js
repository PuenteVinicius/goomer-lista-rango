import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import searchReducer from '../components/search/searchReducer';
import cardRestaurantReducer from '../components/card-restaurant/card-restaurantReducer';

const reducers = combineReducers({
  form: formReducer,
  search: searchReducer,
  cardRestaurant:cardRestaurantReducer
})

export default reducers