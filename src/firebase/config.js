// import firebase from 'firebase';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/firestore'
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz3dv1JWsr21utpWVe66Av6zT06lgFXSo",
  authDomain: "hebe-3834.firebaseapp.com",
  projectId: "hebe-3834",
  storageBucket: "hebe-3834.appspot.com",
  messagingSenderId: "388588557820",
  appId: "1:388588557820:web:96d7c53090fbf112bb4e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(); 