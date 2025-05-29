// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyDtHrih0ZEm0K-H4I8cy7ijx8mPnJgmTn0",
  authDomain: "adventureapp-5b280.firebaseapp.com",
  databaseURL: "https://adventureapp-5b280-default-rtdb.firebaseio.com",
  projectId: "adventureapp-5b280",
  storageBucket: "adventureapp-5b280.appspot.com",
  messagingSenderId: "620797459160",
  appId: "1:620797459160:web:295b47ff86900cfe8635ad"
};

// Initialize Firebase (once)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getDatabase(app);

export { app, db };
