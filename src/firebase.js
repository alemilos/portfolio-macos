// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5wNP2WDqkLOnoDQCkiiLcz7QCD1GYfI4",
  authDomain: "portfolio-a4ca8.firebaseapp.com",
  projectId: "portfolio-a4ca8",
  storageBucket: "portfolio-a4ca8.appspot.com",
  messagingSenderId: "8878976416",
  appId: "1:8878976416:web:47c05de0ad34c496d048c5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Retrieve firestore database
export const db = getFirestore();

// Storage
export const storage = getStorage(app);

// Set persistence to LOCAL ()
setPersistence(auth, browserLocalPersistence);

// const analytics = getAnalytics(app);
