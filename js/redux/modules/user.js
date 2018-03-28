import {
  getUserProfile,
  unMarshallResult,
  updateUserProfile
} from '../../config/helpers';

// ACTIONS

const GET_USER_LOADING = 'GET_USER_LOADING';
const GET_USER = 'GET_USER';
const GET_USER_ERROR = 'GET_USER_ERROR';

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

const TOGGLE_EDITABLE = 'TOGGLE_EDITABLE';

// ACTION CREATORS
const getUserLoading = () => ({
  type: GET_USER_LOADING
});

const getUser = userData => ({
  type: GET_USER,
  payload: userData
});

const getUserError = error => ({
  type: GET_USER_ERROR,
  payload: error
});

const updateUser = updateUserData => ({
  type: UPDATE_USER,
  payload: updateUserData
});

const updateUserError = error => ({
  type: UPDATE_USER_ERROR,
  payload: error
});

const toggleEditable = () => ({
  type: TOGGLE_EDITABLE
});

// ASYNC ACTION CREATOR

export const fetchUser = userId => async dispatch => {
  dispatch(getUserLoading());
  await getUserProfile(userId)
    .then(doc => {
      if (doc.exists) {
        const userData = unMarshallResult(doc);
        return userData;
      }
    })
    .then(userData => {
      dispatch(getUser(userData));
    })
    .catch(error => dispatch(getUserError(error)));
};

export const updateUserData = (userId, userData) => async dispatch => {
  await updateUserProfile(userId, userData).catch(error =>
    dispatch(updateUserError(error))
  );
  dispatch(updateUser(userData));
};

export const updateToggleEditable = () => dispatch => {
  dispatch(toggleEditable());
};

// REDUCER

export default (
  state = {
    isLoading: false,
    userData: {},
    updateUserData: {},
    error: '',
    editable: false
  },
  action
) => {
  switch (action.type) {
    case GET_USER_LOADING: {
      return { ...state, isLoading: true, error: '' };
    }
    case GET_USER: {
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
        error: ''
      };
    }
    case GET_USER_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case UPDATE_USER: {
      return {
        ...state,
        isLoading: false,
        updateUserData: action.payload,
        userData: { ...state.userData, ...action.payload },
        error: ''
      };
    }
    case UPDATE_USER_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case TOGGLE_EDITABLE: {
      return { ...state, editable: !state.editable };
    }
    default:
      return state;
  }
};
