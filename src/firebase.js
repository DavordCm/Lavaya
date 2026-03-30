import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEMO_KEY_REPLACE_ME",
  authDomain: "lavaya-app.firebaseapp.com",
  projectId: "lavaya-app",
  storageBucket: "lavaya-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
