import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDfCxz2evQ4wiBA8V6kTeqQLyUJWCHBMoA",
  authDomain: "plan-it-88.firebaseapp.com",
  databaseURL: "https://plan-it-88.firebaseio.com",
  projectId: "plan-it-88",
  storageBucket: "plan-it-88.appspot.com",
  messagingSenderId: "974410145183"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
