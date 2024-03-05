import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "API-KEY",
  authDomain: "AUTH-DOMAIN",
  projectId: "PROJECTID",
  storageBucket: "STORAGEBUCKET",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };