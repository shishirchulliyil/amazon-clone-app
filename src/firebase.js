import firebase from "firebase";

const firbaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD5HMhiGcZRI6e_wG3_UzTK-1UznP46xSM",
  authDomain: "clone-19824.firebaseapp.com",
  databaseURL: "https://clone-19824.firebaseio.com",
  projectId: "clone-19824",
  storageBucket: "clone-19824.appspot.com",
  messagingSenderId: "977702086329",
  appId: "1:977702086329:web:6a3a73ea57dbb6ebf15d68",
});

// const db = firbaseApp.firestore();
const auth = firebase.auth();

export { auth };
