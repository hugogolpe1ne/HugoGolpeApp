
import { initializeApp } from "firebase/app";
import { collection , getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGKOYZym2dBlYxWxDmciKrSBF72_15-_Q",
  authDomain: "hugogolpeapp.firebaseapp.com",
  projectId: "hugogolpeapp",
  storageBucket: "hugogolpeapp.appspot.com",
  messagingSenderId: "1004229402802",
  appId: "1:1004229402802:web:7bb0eb6f85ad566ed469ab",
  measurementId: "G-XEGHENEGNY"
};

const app = initializeApp(firebaseConfig);

firebaseConfig.firestore().settings({
  ignoreUndefinedProperties: true,
})

await firebaseConfig
  .firestore()
  .collection('ordenes')
  .doc(productos)
  .update({
    name: undefined,
  })

export const db = getFirestore(app)

export const collectionProductos =collection(db,"productos")
