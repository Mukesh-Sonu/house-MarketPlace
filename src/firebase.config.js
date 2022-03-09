import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6CdTlFHDD039cBYWcLHYYdlXdD5t2nU0",
  authDomain: "house-marketplace-app-cf059.firebaseapp.com",
  projectId: "house-marketplace-app-cf059",
  storageBucket: "house-marketplace-app-cf059.appspot.com",
  messagingSenderId: "889333341347",
  appId: "1:889333341347:web:88809dbdc21d59cbe3f316",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
