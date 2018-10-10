import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBFZzHhjYXYSQ8XCIRc-MNqZ6RWRse1Vpg",
  authDomain: "nycity-15b5a.firebaseapp.com",
  databaseURL: "https://nycity-15b5a.firebaseio.com",
  projectId: "nycity-15b5a",
  storageBucket: "nycity-15b5a.appspot.com",
  messagingSenderId: "11466953563"
};

firebase.initializeApp(config);

export default firebase;
