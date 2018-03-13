import firebase from 'firebase';
import 'firebase/auth';

// Initialize firebase app
const config = {
  apiKey: "AIzaSyCieBwguDuYharx8U99VYfVxreXAEfy3RA",
  authDomain: "coyote-2018.firebaseapp.com",
  databaseURL: "https://coyote-2018.firebaseio.com",
  projectId: "coyote-2018",
  storageBucket: "coyote-2018.appspot.com",
  messagingSenderId: "672612380925"
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();
export { firebaseApp, firebaseAuth };