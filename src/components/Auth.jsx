import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../config/firebase";
import './Auth.css'


const Auth = () => {

    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    
    const navigates = useNavigate();


    const signIn =async() => {
        try{
            await createUserWithEmailAndPassword(auth,email,password)
             navigates('/home');
            
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <div className="auth_login">
            <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={signIn}>Sign In</button>
        </div>
    );
}
export default Auth;