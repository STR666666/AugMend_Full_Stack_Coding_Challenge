// Firebase configuration and auth methods import
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Function to create a new user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Function to sign in a user with email and password
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Function for signing in a user with Google authentication
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider); // Utilizes a popup for Google sign-in
};

// Function to sign out the current user
export const doSignOut = () => {
  return auth.signOut();
};

// Function to send a password reset email to a user
export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// Function to update the password for the signed-in user
export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

// Function to send an email verification to the signed-in user
export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, { url: `${window.location.origin}/home` });
};