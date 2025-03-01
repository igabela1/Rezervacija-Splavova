import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, addDoc, collection, updateDoc, onSnapshot, deleteDoc, getDocs} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO5R0LHjL-UU7RpaXXgDNfvE4weIyjgZM",
  authDomain: "splavovi-9acb0.firebaseapp.com",
  projectId: "splavovi-9acb0",
  storageBucket: "splavovi-9acb0.firebasestorage.app",
  messagingSenderId: "1092247607131",
  appId: "1:1092247607131:web:cb0e1b6b1ce06191a76c7e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, doc, getDoc, addDoc, collection, updateDoc, onSnapshot, deleteDoc, getDocs};
