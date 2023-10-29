// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-24113.firebaseapp.com",
  projectId: "mern-estate-24113",
  storageBucket: "mern-estate-24113.appspot.com",
  messagingSenderId: "246350619344",
  appId: "1:246350619344:web:b5a7e16343596ee1e8b4d5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
