import axios from "axios";
import { API_URL, API_URL_MENU, API_URL_RESTAURANTS} from "../../constants";
import { filterText } from "../../helpers"

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
      let meals = filterText(data, text)      
      dispatch({ type: "FILTER_MEALS", payload: meals });
    });
  };
}
