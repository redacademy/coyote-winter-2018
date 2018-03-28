const ROOT_URL = 'https://maps.googleapis.com/maps/api/staticmap?center=';
const ZOOM_SIZE_MARKER =
  '&zoom=12&size=400x400&markers=color:blue%7Clabel:S%7C';

import { MAP_API } from 'react-native-dotenv';
import { firestoreDb, firebaseAuth } from './firebaseConfig';

// returns a promise for the query for the given userId
// used to retrieve data from the users collection
export const getUserProfile = userId => {
  const db = firestoreDb.collection('users').doc(userId);

  return db.get();
};

// returns a promise for the query for the given userId
// used to retrieve data from the application collection
const getApplications = userId => {
  const db = firestoreDb.collection('applications').doc(userId);
  return db.get();
};

// returns a promise for the query for a given listingId
export const getListing = listingId => {
  const db = firestoreDb.collection('listings').doc(listingId);
  return db.get();
};

// userData should be an object of key/values pairs corresponding
// to database fields that should be updated
// - example of usage:
//  updateUserProfile('20032OjyKweGTpikv65HoUeQCQr1', {location: 'Scranton, PA'});
//
export const updateUserProfile = (userId, userData) => {
  const db = firestoreDb.collection('users').doc(userId);
  return db.update(userData);
};

/**
 * since firestore cannot order on fields not included in a query,
 * we must write our own sort functions:
 * - sorts listings in descending order
 * */
export const sortListingsByDateDesc = (result1, result2) => {
  return result2.listingCreatedDate - result1.listingCreatedDate;
};

export const sortListingsByPriceAsc = (result1, result2) => {
  return result2.price - result1.price;
};
export const sortListingsByPriceDsc = (result1, result2) => {
  return result1.price - result2.price;
};

export const getListingsByLocation = location => {
  const db = firestoreDb.collection('listings').where('city', '==', location);

  return db.get();
};

export const unMarshallResult = result => {
  return JSON.parse(result._document.data.toString());
};

export const getUsers = () => {
  return firestoreDb.collection('users').get();
};

export const getListings = () => {
  return firestoreDb.collection('listings').get();
};

export const getFaves = () => {
  return firestoreDb.collection('favourites').get();
};

export const newUser = (email, password, firstName, lastName) => {
  return firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      firestoreDb
        .collection('users')
        .doc(authUser.uid)
        .set({
          firstName: firstName,
          lastName: lastName,
          email: email
        });
    });
};

// Get applications by querying applications and listings
// and performing a manual inner-join
export const getApplicationsByUser = async uid => {
  const listingIds = {};
  const listingOfApplications = [];

  await getApplications(uid).then(applications => {
    applications.data().applications.forEach(application => {
      listingIds[application.listingId] = application;
    });
  });
  const matches = Object.keys(listingIds);
  await getListings().then(listings => {
    listings.forEach(listing => {
      if (matches.includes(listing.data().listingId)) {
        listingOfApplications.push(
          Object.assign(listingIds[listing.data().listingId], listing.data())
        );
      }
    });
  });
  return listingOfApplications;
};

export const getSingleListing = listingId => {
  return firestoreDb
    .collection('listings')
    .where('listingId', '==', listingId)
    .get();
};

export const addFavourite = (faves, id) => {
  return firestoreDb
    .collection('favourites')
    .doc(id)
    .set({
      favourites: faves
    });
};

export const updateFavourites = (faves, id) => {
  return firestoreDb
    .collection('favourites')
    .doc(id)
    .update({
      favourites: faves
    });
};

export const constructMapUrl = address => {
  const addressUrl = address.split(' ').join('+');
  return (
    ROOT_URL + addressUrl + ZOOM_SIZE_MARKER + addressUrl + '&key=' + MAP_API
  );
};

export const getCities = () => {
  return firestoreDb
    .collection('listings')
    .orderBy('city')
    .get();
};
