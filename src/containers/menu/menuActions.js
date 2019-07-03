import axios from "axios";
const BASE_URL = "https://challange.goomer.com.br";

export function getMenu(id) {
  const request = axios.get(`${BASE_URL}/restaurants/${id}/menu`);
  return {
    type: "GETTING__MENU",
    payload: request
  };
}


export function filterMeals(event) {
  return dispatch => {
    axios.get(`${BASE_URL}/restaurants/${event.id}/menu`).then(response => {
      let arr = response.data.filter(elem => {
        return elem.name.toLowerCase().includes(event.text.toLowerCase());
      });
      if (event.text.length === 0) arr = response.data;
      dispatch({ type: "FILTER_MEALS", payload: arr });
    });
  };
}
