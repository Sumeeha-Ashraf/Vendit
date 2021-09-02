import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2cVQAQ_PP41awOPT_40M9QkLyGaG54QQ",
    authDomain: "shopme-64215.firebaseapp.com",
    projectId: "shopme-64215",
    storageBucket: "shopme-64215.appspot.com",
    messagingSenderId: "27369380748",
    appId: "1:27369380748:web:725c371a35d8ac65a914a9",
    measurementId: "G-D0R7HXSWHX"
  };

 export default firebase.initializeApp(firebaseConfig)