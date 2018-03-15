import firebase from 'firebase';
import 'firebase/auth';
<<<<<<< HEAD
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDING_ID
} from 'react-native-dotenv';

// Initialize firebase app
const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDING_ID
=======
import 'firebase/firestore';

// Initialize firebase app
const config = {
  apiKey: 'AIzaSyCieBwguDuYharx8U99VYfVxreXAEfy3RA',
  authDomain: 'coyote-2018.firebaseapp.com',
  databaseURL: 'https://coyote-2018.firebaseio.com',
  projectId: 'coyote-2018',
  storageBucket: 'coyote-2018.appspot.com',
  messagingSenderId: '672612380925'
>>>>>>> implemented interface for search location page and query helpers
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();
const firestoreDb = firebase.firestore();
<<<<<<< HEAD
export { firebaseAuth, firestoreDb };
=======
export { firebaseApp, firebaseAuth, firestoreDb };
>>>>>>> implemented interface for search location page and query helpers
