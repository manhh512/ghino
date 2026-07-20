import { initializeApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCERd9rAdFL4j55BG_6q1sFebMBPlQV0Kk",
  authDomain: "ghino-86139.firebaseapp.com",
  projectId: "ghino-86139",
  storageBucket: "ghino-86139.firebasestorage.app",
  messagingSenderId: "251610009825",
  appId: "1:251610009825:web:584a352bd985e5b5e3e7a0",
  measurementId: "G-MGGWZS4FDM"
};

const app = initializeApp(firebaseConfig);
export const db_firebase = getFirestore(app);

export const DB_DOC = doc(db_firebase, 'ghino', 'main');
export const SCORE_DOC = doc(db_firebase, 'ghino', 'score');
export const AUDIT_DOC = doc(db_firebase, 'ghino', 'audit');
export const PASSWD_DOC = doc(db_firebase, 'ghino', 'passwords');
