import axios from 'axios'

const BASE_URL = 'https://challange.goomer.com.br'

export function getRestaurants() {
    const request = axios.get(`${BASE_URL}/restaurants`)
    return {
        type: 'GETTING_RESTAURANTS',
        payload: request
    }
}

export function filterRestaurants(e) {
    const text = e.target.value;
    return dispatch => {
        axios.get(`${BASE_URL}/restaurants`).then(response => {
            let arr = response.data.filter(elem => {
                return elem.name.toLowerCase().includes(text.toLowerCase());
            })
            if(text.length === 0) arr = response.data;
            dispatch({ type: "FILTER_RESTAURANTS", payload: arr});                
        })
    } 

}

