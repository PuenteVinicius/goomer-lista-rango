import axios from "axios";
import * as constants from '../../constants';

export let getMenu = (id) => {
  
  const request = axios.get(`${constants.API_URL}/${constants.API_URL_RESTAURANTS}/${id}/${constants.API_URL_MENU}`);
  return {
    type: "GETTING__MENU",
    payload: request
  };
}

export let filterMeals = event => {
  return dispatch => {
    axios.get(`${constants.API_URL}/${constants.API_URL_RESTAURANTS}/${event.id}/${constants.API_URL_MENU}`).then(response => {

      let arr = response.data.filter(elem => elem.name.toLowerCase().includes(event.text.toLowerCase()));
      
      if (event.text.length === 0) arr = response.data;
      
      dispatch({ type: "FILTER_MEALS", payload: arr });
    });
  };
}
