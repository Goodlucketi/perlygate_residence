// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxBA1Xvf83WpdR0dPRwU834cF52rbxIv8",
  authDomain: "pearlygates-30339.firebaseapp.com",
  projectId: "pearlygates-30339",
  storageBucket: "pearlygates-30339.appspot.com",
  messagingSenderId: "351748892762",
  appId: "1:351748892762:web:e2d197224b2fbdc93c5063",
  measurementId: "G-KWDVXLGHHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };