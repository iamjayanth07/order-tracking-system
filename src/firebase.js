// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuccbKo5aLRIQCWAqvAE4z5sz7mNkierU",
  authDomain: "unloadin-orders.firebaseapp.com",
  databaseURL: "https://unloadin-orders-default-rtdb.firebaseio.com",
  projectId: "unloadin-orders",
  storageBucket: "unloadin-orders.appspot.com", // 🔧 fixed typo
  messagingSenderId: "277343420370",
  appId: "1:277343420370:web:0b65c01db2ff59848d920b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export needed functions
export { db, ref, set, get, child };
