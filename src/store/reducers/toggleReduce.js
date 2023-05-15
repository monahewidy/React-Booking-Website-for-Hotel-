// const Initial_state = {
//   movies: [],
//   setmovie: ['ccc'],
//   color: 'black',
//   page: 1,
// };
// export default function favReducer(state = Initial_state, action) {
//   switch (action.type) {
//     case 'SET_FAV':
//       return { ...state, movies: [...state.movies, action.payload] };
//     case 'SET_HEART':
//       return { ...state, color: action.payload };
//     case 'SET_DEL':
//       return { ...state, movies: [...action.payload] };

//     case 'SET_FAVOURITEMOV':
//       return { ...state, setmovie: [...action.payload] };
//     default:
//       return state;
//   }
// }



import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Initial_state={
    favMovies:[]
    // heart:'click',
}

export default function heartToggleReducer(state=Initial_state,action) {

    switch (action.type) {
        case 'SET_TOGGLE':
            return {...state,favMovies:action.payload}
            default: 
            return state;
         
    }
    
}