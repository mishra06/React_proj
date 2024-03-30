// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAio9uzteoxvTSRrUSurtj1gI2xm9U8120",
  authDomain: "food-app-6d7d8.firebaseapp.com",
  projectId: "food-app-6d7d8",
  storageBucket: "food-app-6d7d8.appspot.com",
  messagingSenderId: "1082662421238",
  appId: "1:1082662421238:web:797b417de2a86c5e1ea2d7",
  measurementId: "G-FLM8NFBYYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
