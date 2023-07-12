
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyARK7p-MaiJZTt-1NhVRbWaP9yr5KkpPuY",
  authDomain: "tic-tac-toe-2bf45.firebaseapp.com",
  projectId: "tic-tac-toe-2bf45",
  storageBucket: "tic-tac-toe-2bf45.appspot.com",
  messagingSenderId: "982075728268",
  appId: "1:982075728268:web:695e6448f68be65f01f6a9",
  measurementId: "G-BB8S5Y4NZR"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)