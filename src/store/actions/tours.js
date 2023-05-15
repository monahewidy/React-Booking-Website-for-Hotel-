import axiosConfig from '../../axiosConfig/axiosConfig';



export default function getTours(page){
   
    return (dispatch)=>{
     return   axiosConfig.get(`/tours`).then((res) => {
        
            dispatch({type:"GET_Tour", payload:res.data})

        })
            .catch((err) => {
                // console.log(err);
            })
        }
 }
