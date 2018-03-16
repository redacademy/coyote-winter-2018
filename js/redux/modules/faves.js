const GET_FAVES = "GET_FAVES";

const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
});

export const fetchFaves = faves => dispatch => {
  dispatch(getFaves(faves));
};

export default (
  state = {
    faves: []
  },
  action
) => {
  switch (action.type) {
    case GET_FAVES: {
      return {
        ...state,
        faves: action.payload
      };
    }
    default:
      return state;
  }
};
