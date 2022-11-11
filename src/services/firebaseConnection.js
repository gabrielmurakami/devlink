import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIwrUD3wIf0PUiSxYpftyX_I8U4NQe2ks",
  authDomain: "devlinks-c8bab.firebaseapp.com",
  projectId: "devlinks-c8bab",
  storageBucket: "devlinks-c8bab.appspot.com",
  messagingSenderId: "885604947461",
  appId: "1:885604947461:web:14db498d3152393857ee6c",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
