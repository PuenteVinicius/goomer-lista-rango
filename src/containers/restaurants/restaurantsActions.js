import axios from "axios";
import * as constants from '../../constants';

export let getRestaurants = () => {
  const request = axios.get(`${constants.API_URL}/${constants.API_URL_RESTAURANTS}`);
  return {
    type: "GETTING_RESTAURANTS",
    payload: request
  };
}

export let filterRestaurants = e => {
  const text = e.target.value;
  
  return dispatch => {
    axios.get(`${constants.API_URL}/restaurants`).then(response => {
      
      let arr = response.data.filter(elem => elem.name.toLowerCase().includes(text.toLowerCase()));
      
      if (text.length === 0) arr = response.data;
      
      dispatch({ type: "FILTER_RESTAURANTS", payload: arr });
    });
  };
}
