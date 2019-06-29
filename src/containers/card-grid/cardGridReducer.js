const INITIAL_STATE = {restaurants: []}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_RESTAURANTS_FETCHED':
            return { ...state, restaurants: action.payload.data }
        default:
            return state
    }
} 