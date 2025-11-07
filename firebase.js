// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx8-ZtMjgEACZFSNYsB77zhba5ena3Gc",
  authDomain: "myapp-284a0.firebaseapp.com",
  projectId: "myapp-284a0",
  storageBucket: "myapp-284a0.appspot.com",
  messagingSenderId: "698850595201",
  appId: "1:698850595201:web:97768254eb9e012d2f9880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth to use in login/sign up
export const auth = getAuth(app);
