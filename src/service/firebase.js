import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAFkcXmrSMlKHvKR8sme4_B68T1O6ItrhY",
  authDomain: "cropchat-558b7.firebaseapp.com",
  databaseURL: "https://cropchat-558b7.firebaseio.com",
  projectId: "cropchat-558b7",
  storageBucket: "cropchat-558b7.appspot.com",
  messagingSenderId: "991864243609"
}
firebase.initializeApp(config);

export default {
  database: firebase.database()
}