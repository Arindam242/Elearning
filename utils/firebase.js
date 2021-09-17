import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
 //firebase config
};

const app = initializeApp(firebaseConfig);
export default app;

const auth = getAuth();

export { auth, signInWithPopup, GoogleAuthProvider };
