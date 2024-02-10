// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-user-profiles.firebaseapp.com",
  projectId: "react-user-profiles",
  storageBucket: "react-user-profiles.appspot.com",
  messagingSenderId: "1045239082393",
  appId: process.env.REACT_APP_FIREBASE_appID,
  measurementId: "G-M9EKHGC6TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const getFirestoreApp(app);

export default db ;


