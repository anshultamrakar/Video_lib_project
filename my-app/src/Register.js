import { useState } from "react";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword,  setRegisterPassword] = useState("")

    const RegisterWithCredentials = () => {

        console.log("Under SignUP")
        auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
        .then((userCredential) => {
    
          console.log(userCredential)
          // Signed in 
          var user = userCredential.user;
          toast.success("User Registered Successfull!")
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          toast.error(error.message)
          console.log(error)
          
          // ..
        });
      
      }


  return (
    <div className="registerForm">
    <h3> Register </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <br/>
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
  <br/>
        <button onClick={(e)=> RegisterWithCredentials()}> SignUP </button>
        <p>
                        Already registered?<br />
                        <span className="line">
                            <a href="login">Sign In</a>
                        </span>
                    </p>

    </div>
  )
}

export default Register