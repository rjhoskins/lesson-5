import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
   apiKey: "AIzaSyCUW_0sxQDBp_9RaiQEG7UhEaFVNA4aUrk",
   authDomain: "crwn-db-5b65c.firebaseapp.com",
   databaseURL: "https://crwn-db-5b65c.firebaseio.com",
   projectId: "crwn-db-5b65c",
   storageBucket: "crwn-db-5b65c.appspot.com",
   messagingSenderId: "850145822932",
   appId: "1:850145822932:web:cdf033330985ee449bd341"
};

firebase.initializeApp(config)

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
