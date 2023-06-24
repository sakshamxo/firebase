import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnGuY5KGC48UNnVzYvCJ4mSQt46q_9-Y8",
  authDomain: "dedo-15d35.firebaseapp.com",
  projectId: "dedo-15d35",
  storageBucket: "dedo-15d35.appspot.com",
  messagingSenderId: "891789185563",
  appId: "1:891789185563:web:a109c9022acd21d9a5debe",
  measurementId: "G-ESYXHWTKN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;