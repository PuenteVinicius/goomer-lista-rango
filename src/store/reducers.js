import { combineReducers } from "redux"
import RestaurantsReducer from "./reducers/restaurants"
import menuReducer from "./reducers/menu";

const reducers = combineReducers({
  restaurants: RestaurantsReducer,
  menu: menuReducer 
})

export default reducers;