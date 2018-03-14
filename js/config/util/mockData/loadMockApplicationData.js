/**
 * loadMockApplicationData.js
 * To Run: from directory containing this file, run: node <filename>
 *
 * This file will load users in applicationData.json into the following coyote firestore
 * collections: applications.
 */
const firebase = require('firebase');
require('firebase/firestore');
const serviceAccount = require('./service-key.json');
const data = require('./applicationData.json');
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

const createApplicationInDb = (userId, appObject) => {
  firebase
    .firestore()
    .collection('applications')
    .doc(userId)
    .set(appObject)
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
      const userId = key.userId;
      delete key.userId;
      createApplicationInDb(userId, key);
    }
  });