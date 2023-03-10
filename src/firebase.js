// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-VHYQJmdUbYTd-H6Cz7EjRVNkHVaqgls",
  authDomain: "syrus-34820.firebaseapp.com",
  projectId: "syrus-34820",
  storageBucket: "syrus-34820.appspot.com",
  messagingSenderId: "125335542528",
  appId: "1:125335542528:web:85c8a8149758e9ceecb1e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);