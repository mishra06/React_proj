import React, {useRef} from 'react';
import {auth} from '../fireBase';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import './Signin.css'


const Signin = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    // const auth = getAuth();

    async function signInHandler(){

        const email = emailRef.current.value;
        const pass = passwordRef.current.value;
        try {
            const result = await signInWithEmailAndPassword(auth, email, pass);
            console.log(result);
            alert("SIGNIN Successfully");
            navigate('/home');
        } catch (err) {
            alert(err.message);
            console.log(err.message);
        }

    }

  return (
    <div className='signin_page_sec'>
      <div className='signin_page'>
        <div className="namee">
            <h2>SignIn</h2>
        </div>
        <div className="info">
            <input placeholder='Emial' ref={emailRef} type="text" />
            <input placeholder='password' ref={passwordRef} type="password" />
            
        </div>
        <div className='btnn'>
        <button onClick={signInHandler}>SignIn</button>
        </div>
      </div>
    </div>
  )
}

export default Signin
