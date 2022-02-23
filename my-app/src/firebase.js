// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const  app = firebase.initializeApp (
{
  apiKey: "AIzaSyCCKlBYJ9f_yEmXmvACfnUSttMKxfPRGfc",
  authDomain: "vidly-app-f4e81.firebaseapp.com",
  projectId: "vidly-app-f4e81",
  storageBucket: "vidly-app-f4e81.appspot.com",
  messagingSenderId: "1054360971685",
  appId: "1:1054360971685:web:d351fcf51e3dc7dc00e04c",
  measurementId: "G-TLYT0YYSTD"
}
)
  
// Initialize Firebas
export const auth = app.auth();
export default app;