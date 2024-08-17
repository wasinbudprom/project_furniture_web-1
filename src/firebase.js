// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyD715_A3-Pj9quoFK1zdYSiZMAPOVZsklY",
  authDomain: "fir-projectauth-b0f18.firebaseapp.com",
  projectId: "fir-projectauth-b0f18",
  storageBucket: "fir-projectauth-b0f18.appspot.com",
  messagingSenderId: "374531405116",
  appId: "1:374531405116:web:87217c681da9b4d0d59a39",
  measurementId: "G-K22B23LP49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD715_A3-Pj9quoFK1zdYSiZMAPOVZsklY",
  authDomain: "fir-projectauth-b0f18.firebaseapp.com",
  projectId: "fir-projectauth-b0f18",
  storageBucket: "fir-projectauth-b0f18.appspot.com",
  messagingSenderId: "374531405116",
  appId: "1:374531405116:web:87217c681da9b4d0d59a39",
  measurementId: "G-K22B23LP49"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
