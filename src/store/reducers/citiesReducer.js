const Initial_state = {
  getcities: [],

  page: 1,
};
export default function cityreducer(state = Initial_state, action) {
  switch (action.type) {
    case 'GET_city':
      return { ...state, getcities: [...action.payload] };

    default:
      return state;
  }
}
