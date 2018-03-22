const GET_LISTINGS = 'GET_LISTINGS';

const getListings = listings => ({
  type: GET_LISTINGS,
  payload: listings
});

export const setListings = listings => ({
  type: GET_LISTINGS,
  payload: listings
});

export const fetchListings = listings => dispatch => {
  dispatch(getListings(listings));
};

export default (
  state = {
    listings: []
  },
  action
) => {
  switch (action.type) {
    case GET_LISTINGS: {
      return {
        ...state,
        listings: action.payload
      };
    }
    default:
      return state;
  }
};
