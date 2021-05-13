// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCommThGHtLDWx0bp7vAxm8mYCc1RX5QhY",
  authDomain: "ema-john-c78e0.firebaseapp.com",
  projectId: "ema-john-c78e0",
  storageBucket: "ema-john-c78e0.appspot.com",
  messagingSenderId: "1074281143613",
  appId: "1:1074281143613:web:515c2a78b1787af352f954",
  measurementId: "G-E6WQGJW1F8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };