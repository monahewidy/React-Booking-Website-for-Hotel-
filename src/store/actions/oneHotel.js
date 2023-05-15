import axiosConfig from "../../axiosConfig/axiosConfig"



export default function getonehotel(id){
   
    return (dispatch)=>{
     return   axiosConfig.get(`/hotels/${id}`).then((res) => {
       
            dispatch({type:"GET_ONE_hotel", payload:res.data})
         
        })
            .catch((err) => {
                console.log(err);
            })
        }
 }