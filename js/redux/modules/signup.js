const GET_FIRST_NAME = 'GET_FIRST_NAME';
const GET_LAST_NAME = 'GET_LAST_NAME';
const GET_USERS = 'GET_USERS';
const GET_EMAIL = 'GET_EMAIL';
const GET_PASSWORD = 'GET_PASSWORD';
const SIGNUP_ERROR = 'SIGNUP_ERROR';

const getFirstName = firstName => ({
  type: GET_FIRST_NAME,
  firstName: firstName
});

const getLastName = lastName => ({
  type: GET_LAST_NAME,
  lastName: lastName
});

const getEmail = email => ({
  type: GET_EMAIL,
  email: email
});

const getPassword = password => ({
  type: GET_PASSWORD,
  password: password
});

const getUsers = users => ({
  type: GET_USERS,
  payload: users
});

const signupError = error => ({
  type: SIGNUP_ERROR,
  payload: error
});

export const fetchFirstName = first => dispatch => {
  dispatch(getFirstName(first));
};

export const fetchLastName = last => dispatch => {
  dispatch(getLastName(last));
};

export const fetchEmail = email => dispatch => {
  dispatch(getEmail(email));
};

export const fetchPassword = password => dispatch => {
  dispatch(getPassword(password));
};

export const fetchUsers = users => dispatch => {
  dispatch(getUsers(users));
};

export const newUserError = error => dispatch => {
  dispatch(signupError(error));
};

export default (
  state = {
    first: '',
    last: '',
    email: '',
    password: '',
    error: {},
    users: []
  },
  action
) => {
  switch (action.type) {
    case GET_FIRST_NAME: {
      return {
        ...state,
        first: action.firstName
      };
    }
    case GET_LAST_NAME: {
      return {
        ...state,
        last: action.lastName
      };
    }
    case GET_EMAIL: {
      return {
        ...state,
        email: action.email
      };
    }
    case GET_PASSWORD: {
      return {
        ...state,
        password: action.password
      };
    }
    case GET_USERS: {
      return {
        ...state,
        users: action.payload
      };
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return {
        state
      };
  }
};
