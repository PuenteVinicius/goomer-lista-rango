import axios from 'axios'
const BASE_URL = 'https://challange.goomer.com.br'

export function getRestaurants() {
    const request = axios.get(`${BASE_URL}/restaurants`)
    return {
        type: 'BILLING_RESTAURANTS_FETCHED',
        payload: request
    }
}