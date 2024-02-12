// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArf0QYObWKxZMp9UpIS4XFdRZMXVJM-wY",
  authDomain: "qakaza24-45bf7.firebaseapp.com",
  projectId: "qakaza24-45bf7",
  storageBucket: "qakaza24-45bf7.appspot.com",
  messagingSenderId: "482582550244",
  appId: "1:482582550244:web:05f4f0c1b8fe100e9e3ef1"
};

// Initialize Firebase
const app_firebase = initializeApp(firebaseConfig);
const  db_fibase = getFirestore(app_firebase);
const auth_firebase = getAuth(app_firebase);
const realt_firebase = getDatabase(app_firebase);
export {app_firebase, db_fibase, auth_firebase, realt_firebase};