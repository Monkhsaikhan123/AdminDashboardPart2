// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4yElbFOrIflnp3-Hvk42doWupNEZlHv0",
  authDomain: "mern-food.firebaseapp.com",
  projectId: "mern-food",
  storageBucket: "mern-food.appspot.com",
  messagingSenderId: "709368763833",
  appId: "1:709368763833:web:ebff9730f0371274b81268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;