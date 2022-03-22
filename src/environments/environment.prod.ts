export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWvsbaYhW9woPnkCY7D5rznRVBPyVylig",
  authDomain: "hbo-max-2797b.firebaseapp.com",
  databaseURL: "https://hbo-max-2797b-default-rtdb.firebaseio.com",
  projectId: "hbo-max-2797b",
  storageBucket: "hbo-max-2797b.appspot.com",
  messagingSenderId: "781500069564",
  appId: "1:781500069564:web:48c902761b0527725342b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);