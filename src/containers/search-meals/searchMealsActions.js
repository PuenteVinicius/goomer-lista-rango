export function filterRestaurants(e) {
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}