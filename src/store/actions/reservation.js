import axiosConfig from '../../axiosConfig/axiosConfig';

export default function postReservation(reservationData) {
    return (dispatch) => {
        return axiosConfig.post("/booking", reservationData).then((res) => {
            dispatch({ type: "ADD_RESERVATION", payload: res.data })
            const bookingId = res.data._id;
            const price = res.data.totalCost
            console.log(res.data)
            console.log(bookingId)
            console.log(price)
            localStorage.setItem('reservId', bookingId)
            localStorage.setItem('totalPrice', price)
        })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function getReservation() {
    return (dispatch) => {
        return axiosConfig.post("/booking").then((res) => {
            dispatch({ type: "GET_ALL_RESERVATION", payload: res.data })
        })
            .catch((err) => {
                console.log(err);
            })
    }
}

export function getReservationByUser(userID) {
    return (dispatch) => {
        return axiosConfig.get(`/booking/${userID}`).then((res) => {
            dispatch({ type: "GET_RESERVATION_BY_USER", payload: res.data })
        })
            .catch((err) => {
                console.log(err);
            })
    }
}