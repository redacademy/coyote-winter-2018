import { firebaseAuth } from "../config/firebaseConfig";

export const loginUser = (email, password) => {
  firebaseAuth.signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  firebaseAuth.signOut();
};
