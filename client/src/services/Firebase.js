// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaN4kG_l4N1r1tm1S929sKefo5M0WRBwE",
  authDomain: "ayden-s-tech-blog.firebaseapp.com",
  projectId: "ayden-s-tech-blog",
  storageBucket: "ayden-s-tech-blog.appspot.com",
  messagingSenderId: "982619150754",
  appId: "1:982619150754:web:d8f4f78b5ebb4862cb7afb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export default app