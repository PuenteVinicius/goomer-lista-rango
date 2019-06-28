import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import searchReducer from '../components/search/searchReducer';


const reducers = combineReducers({
  form: formReducer,
  search: searchReducer
})

export default reducers