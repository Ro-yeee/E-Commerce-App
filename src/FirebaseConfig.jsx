import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDVZsYT94arGp0UMJW1sp41-VO8jjbRRtY",
    authDomain: "e-commerce-app-a81fb.firebaseapp.com",
    projectId: "e-commerce-app-a81fb",
    storageBucket: "e-commerce-app-a81fb.appspot.com",
    messagingSenderId: "434414658",
    appId: "1:434414658:web:4830bd2a034a8e6a1fb9db",
    measurementId: "G-WCXNMXTJZK"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {db,auth,provider}