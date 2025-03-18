// firebase.utils.js

// Import necessary Firebase services using named imports
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC7fP96zMfFUZ14sQQo0MknOpBYQlpnVg",
  authDomain: "crwn-db-65b73.firebaseapp.com",
  projectId: "crwn-db-65b73",
  storageBucket: "crwn-db-65b73.firebasestorage.app",
  messagingSenderId: "692900075326",
  appId: "1:692900075326:web:13b06a46c9d8ad97c73e6f",
  measurementId: "G-82FG4JRB0W",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Create a reference to the user document in Firestore
  const userRef = doc(firestore, "users", userAuth.uid);

  // Check if the document exists
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

// Setup Google Auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Function to sign in with Google
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Export auth and firestore for use elsewhere
export { auth, firestore };
