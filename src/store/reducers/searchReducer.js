const initial_state = {
    hotelsByCity: []
}

export default function searchReducer(state = initial_state, action) {
    switch (action.type) {
        case "SEARCH_BY_CITY":
            return { ...state, hotelsByCity: action.payload }
        default:
            return state
    }
}



