// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA6evqI77Kc1kxd_8a-pUcOe_RSv9gcdgs",
  authDomain: "reels-webapp-a5400.firebaseapp.com",
  projectId: "reels-webapp-a5400",
  storageBucket: "reels-webapp-a5400.appspot.com",
  messagingSenderId: "945487003558",
  appId: "1:945487003558:web:eb1042389167e36692d967",
  measurementId: "G-Q1GM4SZ72B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database={
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    comments:firestore.collection('comments'),
    getTimeStamp:firebase.firestore.FieldValue.serverTimestamp,
}
export const storage=firebase.storage();