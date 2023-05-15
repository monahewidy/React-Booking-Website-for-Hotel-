import axiosConfig from '../../axiosConfig/axiosConfig';



export default function getActivities(page){
   
    return (dispatch)=>{
     return   axiosConfig.get(`/activities`).then((res) => {
        
            dispatch({type:"GET_Activity", payload:res.data})

        })
            .catch((err) => {
               
            })
        }
 }
