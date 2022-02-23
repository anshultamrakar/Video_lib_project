import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import DataContext from './Context/DataContext'
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Login = () => {

  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  
  const { login } = useContext(DataContext) 

  const LoginpWithCredentials = () => {

    auth.signInWithEmailAndPassword(LoginEmail, LoginPassword)
    .then((userCredential) => {

      console.log(userCredential)
      // Signed in 
      var user = userCredential.user;
      toast.success("User login Successfull!")
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      toast.error(error.message)
      
      // ..
    });
  
  }
    return(
        <div className="loginForm">
        <h3> Login User </h3>
        <input
          placeholder="Email..."
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <br/>
        <input
          placeholder="Password..."
          onChange={(e) => setLoginPassword(e.target.value)}
        />
         <br/>
        <button onClick={(e)=>LoginpWithCredentials()}>
            SigUp
        </button>
    
        <ToastContainer />
        </div>
    )
}

export default Login