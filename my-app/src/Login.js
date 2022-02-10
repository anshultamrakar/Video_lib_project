import { useState } from "react";
import { createUserWithEmailAndPassword , onAuthStateChanged , signOut , signInWithEmailAndPassword} from "firebase/auth";

import { auth } from "./firebase-config";

const Login = () => {

    const [registerEmail , setRegisterEmail] = useState("")
    const [registerPassword , setRegisterPassword] = useState("")
    const [loginEmail , setLoginEmail] = useState("")
    const [loginPassword , setLoginPassword ] = useState("")
    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    

    const register = async() => {
        try{
            const user = createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword)
            console.log(user)
        }catch(err){
            console.log(err.message)
        }
    }

    const login = async() => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
        }catch(err){
            console.log(err.message)
        }

    }

    const logout = async() => {
        await signOut(auth);
    }

return(
<div className="App">
<div>
    <h3> Register User </h3>
    <input
    placeholder="Email..."
    onChange={(e) => setRegisterEmail(e.target.value)}
    />
    <input
    placeholder="Password..."
    onChange={(e) => setRegisterPassword(e.target.value)}
    />
    <button onClick={register} > Create User</button>
    </div>
    <div>
    <h3> Login </h3>
    <input
    placeholder="Email..."
    onChange={(e) => setLoginEmail(e.target.value)}
    />
    <input 
    placeholder="Password"
    onChange={(e) => setLoginPassword(e.target.value)}
    />
    <button onClick={login} >login</button>
    </div>
    <h4>User Logged in </h4>
    {user?.email}
    <button onClick={logout}> Sign out </button>
</div>
  )
};

export default Login;







