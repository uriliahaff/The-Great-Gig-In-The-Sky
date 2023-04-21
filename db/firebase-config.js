// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlFChAhJQBbNIdr2B08CQ_P7K99srgIRE",
  authDomain: "thegreatgiginthesky.firebaseapp.com",
  projectId: "thegreatgiginthesky",
  storageBucket: "thegreatgiginthesky.appspot.com",
  messagingSenderId: "824936512129",
  appId: "1:824936512129:web:6f43e56eca88b5ca73ab80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;