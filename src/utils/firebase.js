// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd9wTiYqoVjE1YMT5esoLW3PsvNeljE0Q",
  authDomain: "tienda-tagliaferro.firebaseapp.com",
  projectId: "tienda-tagliaferro",
  storageBucket: "tienda-tagliaferro.appspot.com",
  messagingSenderId: "354741402798",
  appId: "1:354741402798:web:3e026e4ae617174f1b413f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);