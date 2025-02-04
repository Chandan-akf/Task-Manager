// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-8d8bc.firebaseapp.com",
  projectId: "task-manager-8d8bc",
  storageBucket: "task-manager-8d8bc.appspot.com",
  messagingSenderId: "280716849491",
  appId: "1:280716849491:web:1d2ec1bc30f5419166b1a6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);