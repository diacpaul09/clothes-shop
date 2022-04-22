import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAsM2qGVoSp7WOB6md0CM-8ypXD0MuSbF8",
  authDomain: "clothes-shop-diacpaul.firebaseapp.com",
  projectId: "clothes-shop-diacpaul",
  storageBucket: "clothes-shop-diacpaul.appspot.com",
  messagingSenderId: "638421023412",
  appId: "1:638421023412:web:758aeba14e29b9c7cb75e1",
  measurementId: "G-X2XFRHCEL5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
