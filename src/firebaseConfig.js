// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyASeX-BIbJBGlJGFSSi75AvbW8Bo8P3LN8",
  authDomain: "let-schat-fc213.firebaseapp.com",
  projectId: "let-schat-fc213",
  storageBucket: "let-schat-fc213.appspot.com",
  messagingSenderId: "791769232350",
  appId: "1:791769232350:web:8a5ee0eafd7ec87119234f",
  measurementId: "G-KZJS6V3463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);