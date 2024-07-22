// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCjsaGqDj-WgnBig9RaNz9ytTQFe_iNdzw",
  authDomain: "southsideshop-d2ceb.firebaseapp.com",
  projectId: "southsideshop-d2ceb",
  storageBucket: "southsideshop-d2ceb.appspot.com",
  messagingSenderId: "139925835876",
  appId: "1:139925835876:web:33515796b33d7fe9b88f71",
  measurementId: "G-RP7SL3NBN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);