const LOGIN_ERROR = 'LOGIN_ERROR';
const GET_EMAIL = 'GET_EMAIL';
const GET_PASSWORD = 'GET_PASSWORD';
const RESET_LOGIN = 'RESET_LOGIN';

const loginError = error => ({
  type: LOGIN_ERROR,
  payload: error
});

const getEmail = email => ({
  type: GET_EMAIL,
  payload: email
});

const getPassword = password => ({
  type: GET_PASSWORD,
  payload: password
});

const resetLogin = (email, password) => ({
  type: RESET_LOGIN,
  email: email,
  password: password
});

export const displayLoginError = error => dispatch => {
  dispatch(loginError(error));
};

export const fetchEmail = email => dispatch => {
  dispatch(getEmail(email));
};

export const fetchPassword = password => dispatch => {
  dispatch(getPassword(password));
};

export const fetchReset = (email, password) => dispatch => {
  dispatch(resetLogin(email, password));
};

export default (
  state = {
    email: '',
    error: {},
    password: ''
  },
  action
) => {
  switch (action.type) {
    case LOGIN_ERROR: {
      return {
        error: action.payload
      };
    }
    case GET_EMAIL: {
      return {
        ...state,
        email: action.payload
      };
    }
    case GET_PASSWORD: {
      return {
        ...state,
        password: action.payload
      };
    }
    case RESET_LOGIN: {
      return {
        ...state,
        email: '',
        password: ''
      };
    }
    default:
      return state;
  }
};
