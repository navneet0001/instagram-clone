// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChckqvptpD_-3ROINs1ieeiZDfbhP2tyQ",
    authDomain: "instagram-clone-app-27ebb.firebaseapp.com",
    databaseURL: "https://instagram-clone-app-27ebb-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-app-27ebb",
    storageBucket: "instagram-clone-app-27ebb.appspot.com",
    messagingSenderId: "163889950301",
    appId: "1:163889950301:web:8626f75ca13a52e610e7b4",
    measurementId: "G-QQ9K77T8FM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };