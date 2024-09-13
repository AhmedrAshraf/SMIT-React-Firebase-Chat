import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDywJu-C39zs85CMyWdSG0nm0nwJNHK01Q",
  authDomain: "login-smit.firebaseapp.com",
  projectId: "login-smit",
  storageBucket: "login-smit.appspot.com",
  messagingSenderId: "1058827475679",
  appId: "1:1058827475679:web:02bd7025021bbbe344a76a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
