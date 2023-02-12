// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClFAcsr4TjJaCKtiRmW3b03R5c7NkS0W0",
  authDomain: "chat-64cff.firebaseapp.com",
  projectId: "chat-64cff",
  // storageBucket: "chat-64cff.appspot.com",
  messagingSenderId: "660564545752",
  appId: "1:660564545752:web:130aa73841fad7570f07ad",
  measurementId: "G-MF9KTYJ1Q7",
  storageBucket: "gs://chat-64cff.appspot.com",

};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
// export app();
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
 