// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxb2rjra9fJYPHdiIGZdtDQ8fAjZJknTs",
  authDomain: "react-dragon-news-168a1.firebaseapp.com",
  projectId: "react-dragon-news-168a1",
  storageBucket: "react-dragon-news-168a1.appspot.com",
  messagingSenderId: "135487753130",
  appId: "1:135487753130:web:16285ea98c385f59b979d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app