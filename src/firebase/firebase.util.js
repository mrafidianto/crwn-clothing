import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCNpWxFKjORy1QRDdMoX5VZISk5yYm31KA',
  authDomain: 'crwn-db-eb997.firebaseapp.com',
  projectId: 'crwn-db-eb997',
  storageBucket: 'crwn-db-eb997.appspot.com',
  messagingSenderId: '762561228458',
  appId: '1:762561228458:web:3613f7f2ffbb507c956ad3',
  measurementId: 'G-JNK0DRYRFY',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);

  const snapshot = await userRef.get(userRef);

  if (!snapshot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
