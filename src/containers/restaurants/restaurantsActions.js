import axios from 'axios'
const BASE_URL = 'https://challange.goomer.com.br'

export function getRestaurants() {
    const request = axios.get(`${BASE_URL}/restaurants`)
    return {
        type: 'GETTING_RESTAURANTS',
        payload: request
    }
}