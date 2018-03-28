// ACTIONS

const UPDATE_LANDLORD = 'UPDATE_USER';

// ACTION CREATORS

export const updateLandlordData = landlordData => ({
  type: UPDATE_LANDLORD,
  payload: landlordData
});

// REDUCER

export default (
  state = {
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
    default:
      return state;
  }
};
