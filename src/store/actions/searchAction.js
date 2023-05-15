import axiosConfig from "../../axiosConfig/axiosConfig";

export default function searchByCity (destination){
    return (dispatch) =>{
       return axiosConfig.get(`/Hotels/findHotels/${destination}`).then((res)=>{
        dispatch ({type:'SEARCH_BY_CITY', payload: res.data})
       })
       .catch((err)=>{
        console.log(err);
       })
    }
}

