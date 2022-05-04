// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCurbDpzyKokebJvXr_5E25B1MjHuJchX0",
  authDomain: "ema-john-simple-practice-93caa.firebaseapp.com",
  projectId: "ema-john-simple-practice-93caa",
  storageBucket: "ema-john-simple-practice-93caa.appspot.com",
  messagingSenderId: "1028636178194",
  appId: "1:1028636178194:web:f789cb338345a14c1ea5cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
