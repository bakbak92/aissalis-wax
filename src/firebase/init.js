import firebase from 'firebase'
import firestore from 'firebase/firestore'
import auth from 'firebase/auth'
import storage from 'firebase/storage'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCMHevYVzyzVcQSUPeFdQb8UjwgnlcTGgM",
    authDomain: "aissalis-wax.firebaseapp.com",
    databaseURL: "https://aissalis-wax.firebaseio.com",
    projectId: "aissalis-wax",
    storageBucket: "aissalis-wax.appspot.com",
    messagingSenderId: "954639615629"
};
firebase.initializeApp(config);

  // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
const storageService = firebase.storage();
const storageRef = storageService.ref();
const authi = firebase.auth()

export {storageService, storageRef, db, authi}