import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB8RJKR-mtqGNitXf7NyWfNQxwHKRsILYc",
  authDomain: "clientmanager-430ec.firebaseapp.com",
  databaseURL: "https://clientmanager-430ec.firebaseio.com",
  projectId: "clientmanager-430ec",
  storageBucket: "clientmanager-430ec.appspot.com",
  messagingSenderId: "832793101829"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
