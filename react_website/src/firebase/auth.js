import { Signup } from "../Components/Signup/Signup";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider } from "firsebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignWithEmailAndPassword = (email, password) => {
    return doSignWithEmailAndPassword(auth, email, password)
};

export const doSignInWithGoogle = async() => {
    const provider = new GoogleAuthProvider();
    const result = await doSignInWithGoogle(auth, provider);
    return result;
};

export const doSignOut = () => {
    return auth.signOut();
};

// export const doPasswordRest = (email) => {
//     return sendPasswordResetEmail(auth, email);
// };

// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = () => {
//     return doSendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`,
//     });
// }
