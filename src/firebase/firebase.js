import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWiX_du77JWgV6bge75lmtPGBF0lvwtS0",
  authDomain: "augmend-coding-challenge.firebaseapp.com",
  projectId: "augmend-coding-challenge",
  storageBucket: "augmend-coding-challenge.appspot.com",
  messagingSenderId: "152645514998",
  appId: "1:152645514998:web:4889832801bfe7d7b41ed7",
  measurementId: "G-CS1ERTJ5YN"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };