import * as firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDmCEurqhBAcrLYJ7KazN3--BCq5q84Eiw",
    authDomain: "xroot-df532.firebaseapp.com",
    databaseURL: "https://xroot-df532.firebaseio.com",
    projectId: "xroot-df532",
    storageBucket: "xroot-df532.appspot.com",
    messagingSenderId: "41576630322",
    appId: "1:41576630322:web:ba466db42346f6ea47d42b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebaseApp.auth();