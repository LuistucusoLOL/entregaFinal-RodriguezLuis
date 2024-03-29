import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "subtle-cubist-404921.firebaseapp.com",
  projectId: "subtle-cubist-404921",
  storageBucket: "subtle-cubist-404921.appspot.com",
  messagingSenderId: "377614750239",
  appId: "1:377614750239:web:c16b11e867d3a7495cbb2a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);