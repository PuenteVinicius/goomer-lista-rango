const INITIAL_STATE = {list: []}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GETTING_RESTAURANTS':
            return { ...state, list: action.payload.data }
        
        case'FILTER_RESTAURANTS':  
            return { ...state, list: action.payload }
        default:
            return state
    }
} 