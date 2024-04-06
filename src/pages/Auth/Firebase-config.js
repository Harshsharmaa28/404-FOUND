import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz09UbQ1H6RniEPeMmxIbqmzY8vUpHIIc",
  authDomain: "found-6fdaa.firebaseapp.com",
  projectId: "found-6fdaa",
  storageBucket: "found-6fdaa.appspot.com",
  messagingSenderId: "96601614703",
  appId: "1:96601614703:web:616d4de1d0a1fb10fda09a",
};

const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const auth = getAuth(app);
