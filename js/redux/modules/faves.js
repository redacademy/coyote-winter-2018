const GET_FAVES = 'GET_FAVES';
const GET_FAVE_IDS = 'GET_FAVE_IDS';
const FAVES_ERROR = 'FAVES_ERROR';

export const getFaveListings = faves => ({
  type: GET_FAVES,
  payload: faves
});

export const getFaveIds = faves => ({
  type: GET_FAVE_IDS,
  payload: faves
});

export const favesError = error => ({
  type: FAVES_ERROR,
  payload: error
});

export const fetchFaves = faves => dispatch => {
  dispatch(getFaveListings(faves));
};

export default (
  state = {
    faveIds: [],
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
    case GET_FAVE_IDS: {
      return {
        ...state,
        faveIds: action.payload
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
