// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK-G0lEQlLTXovjk1YxSghK4xc-7fdksg",
  authDomain: "usersmatecar.firebaseapp.com",
  projectId: "usersmatecar",
  storageBucket: "usersmatecar.appspot.com",
  messagingSenderId: "396161082390",
  appId: "1:396161082390:web:11a845d8323409acee4137",
  measurementId: "G-KYC7KCYK2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);