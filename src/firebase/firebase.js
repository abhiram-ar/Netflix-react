import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ50ns9s3T0qcA8U4uiS-nN2UWxI-8Sbc",
    authDomain: "netflix-clone-66494.firebaseapp.com",
    projectId: "netflix-clone-66494",
    storageBucket: "netflix-clone-66494.firebasestorage.app",
    messagingSenderId: "391531363684",
    appId: "1:391531363684:web:d620c95f84af84d8bece71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {app, auth, db}
