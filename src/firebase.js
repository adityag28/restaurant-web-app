// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDON50rqtJWw-kY37MU53eZsAoU8LnHyzE",
  authDomain: "walkinqr.firebaseapp.com",
  projectId: "walkinqr",
  storageBucket: "walkinqr.firebasestorage.app",
  messagingSenderId: "789490316665",
  appId: "1:789490316665:web:8e80794ba0dd0f65d4eba8",
  measurementId: "G-LCZYLT4WPG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, db, analytics, auth };
