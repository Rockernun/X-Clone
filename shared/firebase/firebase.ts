import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiXPlT8MfQ_19NN-IOkDYqyYYYhhRc5A8",
  authDomain: "x-clone-81ee9.firebaseapp.com",
  projectId: "x-clone-81ee9",
  storageBucket: "x-clone-81ee9.appspot.com",
  messagingSenderId: "817700290047",
  appId: "1:817700290047:web:4af741ddc6247b3d133bca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
