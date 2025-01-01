import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKlRxIKBMkpJQHmC1PSR1Js9Y3gvJkvxo",
  authDomain: "notion-ai-34f5d.firebaseapp.com",
  projectId: "notion-ai-34f5d",
  storageBucket: "notion-ai-34f5d.firebasestorage.app",
  messagingSenderId: "352243087890",
  appId: "1:352243087890:web:77e2b30aac433625fd76cb",
};

//! Initializing or running the preregistered app

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
