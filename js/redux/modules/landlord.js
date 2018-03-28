import { getUserProfile, unMarshallResult } from '../../config/helpers';

// ACTIONS

const GET_LANDLORD_LOADING = 'GET_LANDLORD_LOADING';
const GET_LANDLORD = 'GET_LANDLORD';
const GET_LANDLORD_ERROR = 'GET_LANDLORD_ERROR';

// ACTION Creators
const getLandlordLoading = () => ({
  type: GET_LANDLORD_LOADING
});

const getLandlord = landlordData => ({
  type: GET_LANDLORD,
  payload: landlordData
});

const getLandlordError = error => ({
  type: GET_LANDLORD_ERROR,
  payload: error
});

// ASYNC ACTION CREATOR

export const fetchLandlord = landlordId => async dispatch => {
  dispatch(getLandlordLoading());

  await getUserProfile(landlordId)
    .then(doc => {
      if (doc.exists) {
        const landlordData = unMarshallResult(doc);

        return landlordData;
      }
    })
    .then(landlordData => {
      dispatch(getLandlord(landlordData));
    })
    .catch(error => dispatch(getLandlordError(error)));
};

// REDUCER

export default (
  state = {
    isLoading: false,
    landlordData: {},
    error: ''
  },
  action
) => {
  switch (action.type) {
    case GET_LANDLORD_LOADING: {
      return { ...state, isLoading: true, error: '' };
    }
    case GET_LANDLORD: {
      return {
        ...state,
        isLoading: false,
        landlordData: action.payload,
        error: ''
      };
    }
    case GET_LANDLORD_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};
