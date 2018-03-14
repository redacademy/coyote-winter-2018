/**
 * loadMockUserData.js
 * To Run: from directory containing this file, run: node <filename>
 *
 * This file will load users in userData.json into the following coyote firestore
 * collections: authentication, users.
 */
const firebase = require('firebase');
require('firebase/firestore');
const serviceAccount = require('./service-key.json');
const data = require('./userData.json');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://coyote-2018.firebaseio.com'
});

const config = {
  apiKey: 'AIzaSyCieBwguDuYharx8U99VYfVxreXAEfy3RA',
  authDomain: 'coyote-2018.firebaseapp.com',
  databaseURL: 'https://coyote-2018.firebaseio.com',
  projectId: 'coyote-2018',
  storageBucket: 'coyote-2018.appspot.com',
  messagingSenderId: '672612380925'
};

firebase.initializeApp(config);

const createUserInDb = (userId, userObject) => {
  firebase
    .firestore()
    .collection('users')
    .doc(userId)
    .set(userObject)
    .then(() => {
      /* eslint-disable-next-line no-console */
      console.log('succesfully written to firestore: ' + userId);
    })
    .catch(error => {
      /* eslint-disable-next-line no-console */
      console.error('Error writing to users: ', error);
    });
};

data &&
  data.forEach(key => {
    if (typeof key === 'object') {
      admin
        .auth()
        .createUser(key)
        .then(record => {
          createUserInDb(record.uid, key);
        })
        .catch(error => {
          /* eslint-disable-next-line no-console */
          console.error('Error writing to users: ', error);
        });
    }
  });
