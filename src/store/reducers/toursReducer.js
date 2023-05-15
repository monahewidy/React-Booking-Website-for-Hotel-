const Initial_state = {
    gettours: [],
    page: 1
}

export default function toursReducer(state = Initial_state, action) {
    switch (action.type) {
        case "GET_Tour":
            return { ...state, gettours: [...action.payload] }
        default:
            return state
    }
}

