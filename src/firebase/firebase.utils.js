import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDyhwhaKBPuoKiWNewPoY-d4YE9pgcjp7A",
  authDomain: "sarath-db.firebaseapp.com",
  databaseURL: "https://sarath-db.firebaseio.com",
  projectId: "sarath-db",
  storageBucket: "sarath-db.appspot.com",
  messagingSenderId: "1730207601",
  appId: "1:1730207601:web:f7233e1c4508260679a0d0",
  measurementId: "G-7ES9L2N2N8"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;