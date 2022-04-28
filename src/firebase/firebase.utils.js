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

export const createUserProfileDocumet = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creatung user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
