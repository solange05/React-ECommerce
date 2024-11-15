import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDAnjyFnrHXojWkWGfvbVj3bNWAcYK7h8",
  authDomain: "eclipse-commerce.firebaseapp.com",
  projectId: "eclipse-commerce",
  storageBucket: "eclipse-commerce.firebasestorage.app",
  messagingSenderId: "287288266640",
  appId: "1:287288266640:web:647ce21c96b973ec58ed15",
  measurementId: "G-RRYYW90QH4"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };