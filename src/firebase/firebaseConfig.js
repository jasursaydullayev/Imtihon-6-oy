import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2E9iLVbD5umcCQqGepOG98Lzkfet3bSM",
  authDomain: "my-exam-50747.firebaseapp.com",
  projectId: "my-exam-50747",
  storageBucket: "my-exam-50747.appspot.com",
  messagingSenderId: "313417201286",
  appId: "1:313417201286:web:1f5198594520a72ee0c307"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()
export {db, auth}