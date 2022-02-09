import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzRyLyTez77tUeHRy97CKAy-GVG90P6Xg",
  authDomain: "challenge-d6288.firebaseapp.com",
  projectId: "challenge-d6288",
  storageBucket: "challenge-d6288.appspot.com",
  messagingSenderId: "1024865075975",
  appId: "1:1024865075975:web:2352f9e275eccbf2093ba2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
