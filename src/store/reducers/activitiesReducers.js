const Initial_state = {
    getactivities: [],
    page: 1
}

export default function activitiesReducer(state = Initial_state, action) {
    switch (action.type) {
        case "GET_Activity":
            return { ...state, getactivities: [...action.payload] }
        default:
            return state
    }
}

