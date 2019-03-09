import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAZ0gjwTLmQ3smtwkWapKJdEH_N0I7PIwA",
    authDomain: "malang-on-fire-94f39.firebaseapp.com",
    databaseURL: "https://malang-on-fire-94f39.firebaseio.com",
    projectId: "malang-on-fire-94f39",
    storageBucket: "malang-on-fire-94f39.appspot.com",
    messagingSenderId: "178702901771"
  };
  firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();