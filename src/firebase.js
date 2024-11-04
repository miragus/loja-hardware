import firebase from "firebase/compat";
import "firebase/compat/firestore"

let firebaseConfig = {
  apiKey: "AIzaSyDxNIK2Aou1gM26-3XCU2l6XOQFO6A4fdQ",
  authDomain: "hardwares-db5ef.firebaseapp.com",
  projectId: "hardwares-db5ef",
  storageBucket: "hardwares-db5ef.appspot.com",
  messagingSenderId: "131397816308",
  appId: "1:131397816308:web:7117a19b0d574d8d93b3a1"
};

if (!firebase.apps.length) {
  console.log(`Conectando...  Status:${firebase.apps.length}`);
  firebase.initializeApp(firebaseConfig);
  console.log(`Conectado  Status:${firebase.apps.length}`);
}

export default firebase;