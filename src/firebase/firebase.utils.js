import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDPHY-GHTRlERPsaL9cEDlDvGfeT68nvyg',
	authDomain: 'crwn-db-d94d9.firebaseapp.com',
	databaseURL: 'https://crwn-db-d94d9.firebaseio.com',
	projectId: 'crwn-db-d94d9',
	storageBucket: '',
	messagingSenderId: '651158194541',
	appId: '1:651158194541:web:a31ad7d820a220c8'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
