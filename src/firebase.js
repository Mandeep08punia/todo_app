import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
        apiKey: "AIzaSyDn1Fp9QjCr--Emt6CcC6E5L_vkNfT7Or0",
        authDomain: "todo-app-b27ae.firebaseapp.com",
        projectId: "todo-app-b27ae",
        storageBucket: "todo-app-b27ae.appspot.com",
        messagingSenderId: "334780367846",
        appId: "1:334780367846:web:5cba8a22147f804563cc27",
        measurementId: "G-YZRH10C4TJ"
 }
);
const db=firebaseApp.firestore();

export default db;
