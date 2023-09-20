// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHxaJV5J1YWdewhk_xGGCJGl3cWu5vHLc",
  authDomain: "chatapp-66f48.firebaseapp.com",
  projectId: "chatapp-66f48",
  storageBucket: "chatapp-66f48.appspot.com",
  messagingSenderId: "39054887448",
  appId: "1:39054887448:web:88df65bbb060b9301ed16d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

