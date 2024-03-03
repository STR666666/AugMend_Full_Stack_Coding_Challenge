// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firstbase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWiX_du77JWgV6bge75lmtPGBF0lvwtS0",
  authDomain: "augmend-coding-challenge.firebaseapp.com",
  projectId: "augmend-coding-challenge",
  storageBucket: "augmend-coding-challenge.appspot.com",
  messagingSenderId: "152645514998",
  appId: "1:152645514998:web:4889832801bfe7d7b41ed7",
  measurementId: "G-CS1ERTJ5YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };
// const analytics = getAnalytics(app);