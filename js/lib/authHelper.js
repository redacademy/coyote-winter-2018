import { firebaseAuth } from '../config/firebaseConfig';

export const loginUser = (email, password) => {
  firebaseAuth.signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  firebaseAuth.signOut();
};

export const isValidEmailAndPassword = (email, password) => {
  const validEmail = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const errorMessage = {
    code: 'Invalid login',
    message: 'Please Enter a Valid Email Address'
  };

  return validEmail.test(email) && password.length > 5 ? true : errorMessage;
};
