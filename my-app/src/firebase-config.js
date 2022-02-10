import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

 

const firebaseConfig = {
  apiKey: "AIzaSyC7ad9WMErP3OFDoqDXBQLCI1HdOmFwebs",
  authDomain: "video-library-b243c.firebaseapp.com",
  projectId: "video-library-b243c",
  storageBucket: "video-library-b243c.appspot.com",
  messagingSenderId: "570982882804",
  appId: "1:570982882804:web:a1bdb0315d6897fde06da1",
  measurementId: "G-Q0MD89X024"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

