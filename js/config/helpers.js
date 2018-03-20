<<<<<<< HEAD
import { firestoreDb, firebaseAuth } from './firebaseConfig';
=======
import { firestoreDb } from './firebaseConfig';
>>>>>>> Adjusted requests in faves container

// returns a promise for the query for the given userId
// used to retrieve data from the users collection
export const getUserProfile = userId => {
  const db = firestoreDb.collection('users').doc(userId);

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
  return sortListings(result1, result2, true, 'listingCreatedDate');
};

export const sortListingsByPriceAsc = (result1, result2) => {
  return sortListings(result1, result2, false, 'price');
};
export const sortListingsByPriceDsc = (result1, result2) => {
  return sortListings(result1, result2, true, 'price');
};
/**
 * Generic Sort Function
 * - result1 and result2 are objects from the query
 * - desc is true if we are sorting in descending order. if false, sort in ascending order
 * - fieldToSort is the name of object field we should sort on
 **/
const sortListings = (result1, result2, desc, fieldToSort) => {
  if (desc) return `result2.${fieldToSort}` - `result1.${fieldToSort}`;
  return `result1.${fieldToSort}` - `result2.${fieldToSort}`;
};

export const getListingsByLocation = location => {
  const db = firestoreDb.collection('listings').where('city', '==', location);

  return db.get();
};

export const unMarshallResult = result => {
  return JSON.parse(result._document.data.toString());
};

export const newUser = (email, password, firstName, lastName, errorFunc) => {
  firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      firestoreDb
        .collection('users')
        .doc(authUser.uid)

        .set({
          firstName: firstName,
          lastName: lastName
        })

        .catch(function(error) {
          errorFunc(error);
        });
    });
  }
  
export const getListings = () => {
  return firestoreDb.collection('listings').get();
};

export const getFaves = () => {
  return firestoreDb.collection('favourites').get();
};
