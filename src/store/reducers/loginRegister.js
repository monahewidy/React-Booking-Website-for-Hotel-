const Initial_state = {
    users: [],
    currentUser: null,
}

export default function userReducer(state = Initial_state, action) {
    switch (action.type) {
        case "REGISTER_USER":
            return { ...state, users: action.payload }
        case "LOGIN_USER":
            return { ...state, currentUser: action.payload };
        case "GET_USER":
            return { ...state, users: action.payload }
        case "LOGOUT_USER":
            return { ...state, currentUser: null }
        default:
            return state
    }
}