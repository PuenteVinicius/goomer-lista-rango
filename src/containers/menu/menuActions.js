import axios from "axios";
import { API_URL, API_URL_MENU, API_URL_RESTAURANTS, NON_TEXT } from '../../constants';

export let getMenu = id => {
  const request = axios.get(`${API_URL}/${API_URL_RESTAURANTS}/${id}/${API_URL_MENU}`);
  
  return {
    type: "GETTING_MENU",
    payload: request
  };
}

export let filterMeals = ({ text, id }) => {
  return dispatch => {
    axios.get(`${API_URL}/${API_URL_RESTAURANTS}/${id}/${API_URL_MENU}`).then(({ data }) => {
      let meals = data.filter(meal => meal.name.toLowerCase().includes(text.toLowerCase()));
      if (text.length === NON_TEXT) meals = data;
      
      dispatch({ type: "FILTER_MEALS", payload: meals });
    });
  };
}
