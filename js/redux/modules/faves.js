const GET_FAVES = 'GET_FAVES';
const FAVES_ERROR = 'FAVES_ERROR';

const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
});

export const favesError = error => ({
  type: FAVES_ERROR,
  payload: error
});

export const fetchFaves = faves => dispatch => {
  dispatch(getFaves(faves));
};

export default (
  state = {
    faves: [],
    error: ''
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
    case FAVES_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
