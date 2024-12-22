// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${import.meta.env.API_KEY_FIRE_BASE}`,
  authDomain: "netflix-clone-87c31.firebaseapp.com",
  projectId: "netflix-clone-87c31",
  storageBucket: "netflix-clone-87c31.firebasestorage.app",
  messagingSenderId: "936170131212",
  appId: "1:936170131212:web:834a8f82bfcf4165a54329",
  measurementId: "G-6RCGJ05M8G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAnalytics(app);
