// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_V8yiZV0g7guu4sAnO6hGVVUh5gPqLic",
  authDomain: "ahammed-furniture-warehouse.firebaseapp.com",
  projectId: "ahammed-furniture-warehouse",
  storageBucket: "ahammed-furniture-warehouse.appspot.com",
  messagingSenderId: "186769210641",
  appId: "1:186769210641:web:e68295517d33ea184520b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;