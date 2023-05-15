const Initial_state = {
    gethotels: [],
    page: 1
}

export default function hotelreducer(state = Initial_state, action) {
    switch (action.type) {
        case "GET_hotel":
            return { ...state, gethotels: [...action.payload] }
        default:
            return state
    }
}

