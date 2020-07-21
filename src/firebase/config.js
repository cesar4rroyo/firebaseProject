import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCBJWzjl2zg0XWr_cpl7zSQt9uKqtL4GFk",
  authDomain: "react-curso-a51aa.firebaseapp.com",
  databaseURL: "https://react-curso-a51aa.firebaseio.com",
  projectId: "react-curso-a51aa",
  storageBucket: "react-curso-a51aa.appspot.com",
  messagingSenderId: "811758317040",
  appId: "1:811758317040:web:e9ae119fba353bace40135",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
