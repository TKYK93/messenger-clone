import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJFdzLz-fTYWM4Y9tF3CAZ6v_pJvc4NLQ",
    authDomain: "messenger-clone-eb993.firebaseapp.com",
    databaseURL: "https://messenger-clone-eb993.firebaseio.com",
    projectId: "messenger-clone-eb993",
    storageBucket: "messenger-clone-eb993.appspot.com",
    messagingSenderId: "53440924719",
    appId: "1:53440924719:web:fb49effbcdfa850d908ada",
    measurementId: "G-G7WTB0ES0Z"
  });

  const db = firebaseApp.firestore();

  export default db;
