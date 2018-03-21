const UPDATE_APPLICATION_STATE = 'UPDATE_APPLICATION_STATE';
const UPDATE_LOADING = 'UPDATE_LOADING';
const UPDATE_ERROR = 'UPDATE_ERROR';

export const updateApplicationState = applications => ({
  type: UPDATE_APPLICATION_STATE,
  payload: applications
});

export const updateLoadingState = loading => ({
  type: UPDATE_LOADING,
  payload: loading
});

export const updateErrorState = error => ({
  type: UPDATE_LOADING,
  payload: error
});

export default function(
  state = {
    applications: [],
    loading: true,
    error: ''
  },
  action
) {
  switch (action.type) {
    case UPDATE_APPLICATION_STATE:
      return { ...state, applications: action.payload };
    case UPDATE_LOADING:
      return { ...state, loading: action.payload };
    case UPDATE_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
