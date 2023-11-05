// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQpG5f7cezXmzTaiyys5vZmH3BjaLm_YA",
  authDomain: "ecommerce-project-b67b1.firebaseapp.com",
  projectId: "ecommerce-project-b67b1",
  storageBucket: "ecommerce-project-b67b1.appspot.com",
  messagingSenderId: "46932404663",
  appId: "1:46932404663:web:06f013c4471e9b18a0a032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth