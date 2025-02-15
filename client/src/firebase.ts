// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5G67obM_4iiF_Am28z5ifbTEbzmDe9Xc",
  authDomain: "cou-visionary-coders.firebaseapp.com",
  projectId: "cou-visionary-coders",
  storageBucket: "cou-visionary-coders.firebasestorage.app",
  messagingSenderId: "430900147490",
  appId: "1:430900147490:web:d52584eea91ab5d752e17b",
  measurementId: "G-GKGQBD8VVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);