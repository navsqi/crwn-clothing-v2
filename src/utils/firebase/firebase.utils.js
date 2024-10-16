// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  query,
  getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdI0hgXLr5_44xaBAVmgmZd8VIf8W9FJ8",
  authDomain: "crwn-clothing-db-8e34b.firebaseapp.com",
  projectId: "crwn-clothing-db-8e34b",
  storageBucket: "crwn-clothing-db-8e34b.appspot.com",
  messagingSenderId: "849005180493",
  appId: "1:849005180493:web:99345718683ab214178e04",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserProfileDocument = async (
  userAuth,
  additionalData = {}
) => {
  const { uid, displayName, email } = userAuth;

  const userDocRef = doc(db, "users", uid);
  console.log("🚀 ~ createUserProfileDocument ~ userDocRef:", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData,
      });
    } catch (error) {
      console.log("🚀 ~ createUserProfileDocument ~ error:", error);
    }
  }

  return userDocRef;
};

export const createUser = async (email, password) => {
  if (!email || !password) return;

  const resp = await createUserWithEmailAndPassword(auth, email, password);
  console.log("🚀 ~ createUser ~ resp:", resp);

  return resp;
};
