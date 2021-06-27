// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyB7uUct7j92fFmzWxt19M0dtrHDS1oJUD0",
    authDomain: "clone-c2867.firebaseapp.com",
    projectId: "clone-c2867",
    storageBucket: "clone-c2867.appspot.com",
    messagingSenderId: "470094487922",
    appId: "1:470094487922:web:712241443022a5bd6dbdeb",
    measurementId: "G-J9FBEF3LB6"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);


  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};