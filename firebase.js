// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ILZvmP9iZM1Z1g-BhcdDTf5AlI6jB3I",
  authDomain: "login1-364bd.firebaseapp.com",
  projectId: "login1-364bd",
  storageBucket: "login1-364bd.firebasestorage.app",
  messagingSenderId: "896246816841",
  appId: "1:896246816841:web:115ed3648997e39db55f98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;