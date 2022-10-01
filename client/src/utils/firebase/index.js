import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB6ZGdLuj_r0MyWoGpw__OUwm1oFhD7OEA",
  authDomain: "eventify-89244.firebaseapp.com",
  projectId: "eventify-89244",
  storageBucket: "eventify-89244.appspot.com",
  messagingSenderId: "178531265521",
  appId: "1:178531265521:web:618280768978b824107250",
  measurementId: "G-R1XJTJE4QM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();