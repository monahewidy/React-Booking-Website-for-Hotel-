
import axiosConfig from "../../axiosConfig/axiosConfig"




export function register(userData) {
    return (dispatch) => {
        axiosConfig.post(`/users`, userData).then((res) => {
            console.log(res)
            dispatch({ type: "REGISTER_USER", payload: res.data })
        })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function loginUser(userData, user) {
   
    return (dispatch) => {
        return axiosConfig.post(`/users/login`, userData).then((res) => {
            dispatch({ type: "LOGIN_USER", payload: { token: res } })
            localStorage.setItem('token', res.data)
            localStorage.setItem('loggedUser', user);
        
        })
            .catch((err) => {
                console.log(err);
            })
    }

    // return {
    //     type: "LOGIN_USER",
    //     payload: {user, res},
    // };
}


export function getAllUser() {
    return (dispatch) => {
        return axiosConfig.get(`/users`,).then((res) => {
            dispatch({ type: "GET_USER", payload: res.data })
        })
            .catch((err) => {
                console.log(err);
            })
    }
}


// export function logoutUser() {

//     return (dispatch) => {
//         return axiosConfig.get(`/logout`).then((res) => {
//             dispatch({ type: "LOGOUT_USER"})
//         })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }
// }

export function logoutUser() {
    return {
        type: "LOGOUT_USER",
    }

}

