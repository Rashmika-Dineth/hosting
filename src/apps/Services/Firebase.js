import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIrFxXKYFJ-xSB2idBtdYlY9uguo7tznA",
  authDomain: "sampleapp-c8dfd.firebaseapp.com",
  projectId: "sampleapp-c8dfd",
  storageBucket: "sampleapp-c8dfd.appspot.com",
  messagingSenderId: "880342753257",
  appId: "1:880342753257:web:f77b214a4d55f530667578",
  measurementId: "G-QFNYNCCDLF",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
