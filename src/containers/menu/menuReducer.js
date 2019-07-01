const INITIAL_STATE = {menu: []}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GETTING__MENU':
            return { ...state, menu: action.payload.data }
        default:
            return state
    }
} 