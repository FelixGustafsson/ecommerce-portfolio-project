import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKzWPHjCZVmbZx8jn9p-RuDwyJvNISmwc",
  authDomain: "crwn-clothing-db-d84dc.firebaseapp.com",
  projectId: "crwn-clothing-db-d84dc",
  storageBucket: "crwn-clothing-db-d84dc.appspot.com",
  messagingSenderId: "397052086679",
  appId: "1:397052086679:web:a7041f2508ba7f522bdcd2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
