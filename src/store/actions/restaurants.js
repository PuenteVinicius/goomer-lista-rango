import axios from "axios";
import { API_URL, API_URL_RESTAURANTS } from "../../constants";
import { filterText } from "../../helpers";

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
      let restaurants = filterText(data, text);
      dispatch({ type: "FILTER_RESTAURANTS", payload: restaurants });
    });
  };
}
