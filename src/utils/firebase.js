// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Imporatmos, para crear una instancia a nuestro proyecto
import {getFirestore} from "firebase/firestore"

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
//Creamos instancia de nuestra base de datos
export const db = getFirestore(app);