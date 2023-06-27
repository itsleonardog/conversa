import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBD73EG2bxXc3owo9WeaT8YFwwh_IAfrmg",
  authDomain: "conversa-d8038.firebaseapp.com",
  projectId: "conversa-d8038",
  storageBucket: "conversa-d8038.appspot.com",
  messagingSenderId: "1030228569",
  appId: "1:1030228569:web:a229f38024f388b5587f48"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
