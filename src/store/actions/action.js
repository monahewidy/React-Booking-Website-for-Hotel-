import axiosConfig from '../../axiosConfig/axiosConfig';



export default function sethotel(page){
   
    return (dispatch)=>{
     return   axiosConfig.get(`/hotels`).then((res) => {
        
            dispatch({type:"GET_hotel", payload:res.data})

        })
            .catch((err) => {
                console.log(err);
            })
        }
 }
