// Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase";
import firebase from "firebase";
// import "firebase/auth";
// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrvZH8KRj7V1S3cB5FQAA_K1XWj-yPP8U",
  authDomain: "bookshare-d3842.firebaseapp.com",
  databaseURL: "https://bookshare-d3842.firebaseio.com",
  projectId: "bookshare-d3842",
  storageBucket: "bookshare-d3842.appspot.com",
  messagingSenderId: "137275956176",
  appId: "1:137275956176:web:c15a1a863bc175507737d5",
  measurementId: "G-HMVQYB3SCG"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export { firebase, provider };
