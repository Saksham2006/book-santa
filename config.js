 import firebase from 'firebase'
 require('@firebase/firestore')
 
 var firebaseConfig = {
    apiKey: "AIzaSyD2h3hn9R3EJI9ftiCOHdumOv1zXByEyus",
    authDomain: "book-santa-16733.firebaseapp.com",
    projectId: "book-santa-16733",
    storageBucket: "book-santa-16733.appspot.com",
    messagingSenderId: "145224816102",
    appId: "1:145224816102:web:184c81ede1b0813cd0f227",
    measurementId: "G-9VRQKR8FLS"
  };
  // Initialize Firebase
 export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();