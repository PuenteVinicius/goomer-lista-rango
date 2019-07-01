import axios from 'axios'
const BASE_URL = 'https://challange.goomer.com.br'

export function getMenu(id) {
    const request = axios.get(`${BASE_URL}/restaurants/${id}/menu`)
    return {
        type: 'GETTING__MENU',
        payload: request
    }
}