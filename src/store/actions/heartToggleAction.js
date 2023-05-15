// export default function addFav(data) {
//   return {
//     type: 'SET_FAV',
//     payload: data,
//   };
// }

// export function changeHeart(data) {
//   return {
//     type: 'SET_HEART',
//     payload: data,
//   };
// }

// export function delFav(data) {
//   return {
//     type: 'SET_DEL',
//     payload: data,
//   };
// }


export default function changeHeart(data){

  return {
      type:'SET_TOGGLE',
      payload:data
  }
}