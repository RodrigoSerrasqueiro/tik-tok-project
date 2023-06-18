
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD3iJGC1Fu3jUjaNl13j9NEb14HaqWPYaw",
  authDomain: "tiktok---project.firebaseapp.com",
  projectId: "tiktok---project",
  storageBucket: "tiktok---project.appspot.com",
  messagingSenderId: "612669930486",
  appId: "1:612669930486:web:200a6e8065d14b77f225d7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;