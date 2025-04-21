// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWpAkUjgPz19mCxh6H0wgbX6STSGn5ttc",
    authDomain: "aligneye-connect.firebaseapp.com",
    databaseURL: "https://aligneye-connect-default-rtdb.firebaseio.com",
    projectId: "aligneye-connect",
    storageBucket: "aligneye-connect.firebasestorage.app",
    messagingSenderId: "582318772517",
    appId: "1:582318772517:web:fcd85c9db86ebf77c40acc",
    measurementId: "G-WX90MZR8J1"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
