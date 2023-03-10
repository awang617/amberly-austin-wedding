// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgHefpfSjfQMske62Kkk5gTZr4A9n97T4",
  authDomain: "amberly-austin-wedding.firebaseapp.com",
  projectId: "amberly-austin-wedding",
  storageBucket: "amberly-austin-wedding.appspot.com",
  messagingSenderId: "49343278908",
  appId: "1:49343278908:web:429428769f810d87e7f839",
  measurementId: "G-23G0KMN1NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;