const INITIAL_STATE = {restaurants: []}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GETTING_RESTAURANTS':
            return { ...state, restaurants: action.payload.data }
        
        case'FILTER_RESTAURANTS':  
            return { ...state, restaurants: action.payload }
        
        default:
            return state
    }
} 