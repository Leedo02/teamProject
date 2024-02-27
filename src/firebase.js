// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCczWG5piRojhJhgzX9xuUEgt3OMBhY7cw",
  authDomain: "ezfit-b275f.firebaseapp.com",
  projectId: "ezfit-b275f",
  storageBucket: "ezfit-b275f.appspot.com",
  messagingSenderId: "1011832504596",
  appId: "1:1011832504596:web:7fb3a4c1659446b709c201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;