import firebase from 'firebase';

// Config
const firebaseConfig = {
  apiKey: 'AIzaSyADFsBt5IxdtCjLU8E1LuteQwzF07Nt13s',
  authDomain: 'salle-firegram.firebaseapp.com',
  databaseURL: 'https://salle-firegram.firebaseio.com',
  projectId: 'salle-firegram',
  storageBucket: 'salle-firegram.appspot.com',
  messagingSenderId: '139296516375',
  appId: '1:139296516375:web:d20d7b2d6ede84bca1af52',
  measurementId: 'G-CFCS279VCP',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, db, auth, googleProvider, timestamp };
