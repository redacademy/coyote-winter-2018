// ACTIONS

const UPDATE_LANDLORD = 'UPDATE_USER';
const UPDATE_LANDLORD_ID = 'UPDATE_LANDLORD_ID';

// ACTION CREATORS

export const updateLandlordData = landlordData => ({
  type: UPDATE_LANDLORD,
  payload: landlordData
});

export const updateLandlordId = landlordData => ({
  type: UPDATE_LANDLORD_ID,
  payload: landlordData
});

// REDUCER

export default (
  state = {
    landlordId: '',
    landlordData: {
      bio: '',
      firstName: '',
      lastName: '',
      location: '',
      email: '',
      avatar: ''
    },
    error: ''
  },
  action
) => {
  switch (action.type) {
    case UPDATE_LANDLORD: {
      return {
        ...state,
        landlordData: action.payload
      };
    }
    case UPDATE_LANDLORD_ID: {
      return {
        ...state,
        landlordId: action.payload
      };
    }
    default:
      return state;
  }
};
