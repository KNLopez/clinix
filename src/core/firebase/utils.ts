import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqVhy7Ib7UafprN4djOy3O7I1xQu_T1dA",
  authDomain: "clinix-3a6fe.firebaseapp.com",
  databaseURL: "https://clinix-3a6fe.firebaseio.com",
  projectId: "clinix-3a6fe",
  storageBucket: "clinix-3a6fe.appspot.com",
  messagingSenderId: "959822101170",
  appId: "1:959822101170:web:99b3c809c5b1ff62bde7ab",
  measurementId: "G-KL2VHE9RWL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
