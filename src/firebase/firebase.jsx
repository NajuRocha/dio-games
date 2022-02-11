import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
  //PONER ACA LA INFO DE SU APP
  {
    apiKey: "AIzaSyAd2WoJHGps2A86-VO-qc-j30S-VMnT8cY",
    authDomain: "dio-games.firebaseapp.com",
    projectId: "dio-games",
    storageBucket: "dio-games.appspot.com",
    messagingSenderId: "312455086936",
    appId: "1:312455086936:web:471787acde4b65729adb2d",
  }
);
export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
