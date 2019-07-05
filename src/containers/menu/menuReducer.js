const INITIAL_STATE = { menu: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GETTING_MENU":
      return { ...state, menu: action.payload.data };
    case "FILTER_MEALS":
      return { ...state, menu: action.payload };
    default:
      return state;
  }
}
