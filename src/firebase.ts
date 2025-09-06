
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJTPLgCyTzGOXWPd_0ZOtj9gq8-1OeJOQ",
  authDomain: "discord-clone-fall.firebaseapp.com",
  projectId: "discord-clone-fall",
  storageBucket: "discord-clone-fall.firebasestorage.app",
  messagingSenderId: "526884748649",
  appId: "1:526884748649:web:b0f8265fdd9b4497f251f8"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export{auth , provider , db }