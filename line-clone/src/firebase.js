import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVdJxFpIrsbSOWvNxlOxCB14a3dOdwe7U",
  authDomain: "line-clone-482d9.firebaseapp.com",
  projectId: "line-clone-482d9",
  storageBucket: "line-clone-482d9.appspot.com",
  messagingSenderId: "308931011496",
  appId: "1:308931011496:web:4be73cec723301374cb39d",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };