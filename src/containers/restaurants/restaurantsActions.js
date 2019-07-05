import axios from "axios";
import { API_URL, API_URL_RESTAURANTS, NON_TEXT } from '../../constants';

export let getRestaurants = () => {
  const request = axios.get(`${API_URL}/${API_URL_RESTAURANTS}`);
  
  return {
    type: "GETTING_RESTAURANTS",
    payload: request
  };
}

export let filterRestaurants = ({ target }) => {
  const text = target.value;
  
  return dispatch => {
    axios.get(`${API_URL}/restaurants`).then(({ data }) => {
      let restaurants = data.filter(restaurant => restaurant.name.toLowerCase().includes(text.toLowerCase()));
      if (text.length === NON_TEXT) restaurants = data;
      
      dispatch({ type: "FILTER_RESTAURANTS", payload: restaurants });
    });
  };
}
