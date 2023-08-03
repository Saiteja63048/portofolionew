// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBukcaSywB_OuguGQoPVVk-JJR5kQtI_hA",
  authDomain: "portfolionew-5874f.firebaseapp.com",
  projectId: "portfolionew-5874f",
  storageBucket: "portfolionew-5874f.appspot.com",
  messagingSenderId: "301786282552",
  appId: "1:301786282552:web:73a6e3b2cc9551b49304cd",
  measurementId: "G-ECBNNPD067"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);