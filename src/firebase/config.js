// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKWL2nq4nM6jfJBlM1THHH_CyUZkFVaq0",
  authDomain: "lightdark-f3c1b.firebaseapp.com",
  projectId: "lightdark-f3c1b",
  storageBucket: "lightdark-f3c1b.appspot.com",
  messagingSenderId: "941054433762",
  appId: "1:941054433762:web:3d19d88544b90e0a8d81bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);