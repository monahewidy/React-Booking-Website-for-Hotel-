
const Initial_state={
   
    getonehotel:{},

page:1
}
export default function getOneHotel(state=Initial_state,action){
    switch(action.type){
      
        case "GET_ONE_hotel":

            return{...state,getonehotel:action.payload}


            default:
                return state


    }
}
