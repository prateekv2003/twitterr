// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK4jiJg05YxRXGfG6ZlXIt0MvC2yPNZRI",
    authDomain: "twitter-clone-d290f.firebaseapp.com",
    projectId: "twitter-clone-d290f",
    storageBucket: "twitter-clone-d290f.appspot.com",
    messagingSenderId: "450211625383",
    appId: "1:450211625383:web:1492205b4cd01c8ac55e82"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };