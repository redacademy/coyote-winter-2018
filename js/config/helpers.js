import { firestoreDb } from "./firebaseConfig";

// returns a promise for the query for the given userId
// used to retrieve data from the users collection
export const getUserProfile = userId => {
  const db = firestoreDb.collection("users").doc(userId);

  return db.get();
};

// userData should be an object of key/values pairs corresponding
// to database fields that should be updated
// - example of usage:
//  updateUserProfile('20032OjyKweGTpikv65HoUeQCQr1', {location: 'Scranton, PA'});
//
export const updateUserProfile = (userId, userData) => {
  const db = firestoreDb.collection("users").doc(userId);
  return db.update(userData);
};

export const getListingsByLocation = location => {
  const db = firestoreDb.collection("listings").where("city", "==", location);

  return db.get();
};

export const unMarshallResult = result => {
  return JSON.parse(result._document.data.toString());
};
