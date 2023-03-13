// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChUR41PZqL482rpYcjDefk2--NO9dy3Gk",
  authDomain: "crud-react-3b38d.firebaseapp.com",
  projectId: "crud-react-3b38d",
  storageBucket: "crud-react-3b38d.appspot.com",
  messagingSenderId: "715023346999",
  appId: "1:715023346999:web:8abf609602c5329463beb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialiser la base de donnée firestore
export const db = getFirestore(app);