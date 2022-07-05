
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGKOYZym2dBlYxWxDmciKrSBF72_15-_Q",
  authDomain: "hugogolpeapp.firebaseapp.com",
  projectId: "hugogolpeapp",
  storageBucket: "hugogolpeapp.appspot.com",
  messagingSenderId: "1004229402802",
  appId: "1:1004229402802:web:7bb0eb6f85ad566ed469ab",
  measurementId: "G-XEGHENEGNY"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)