import React, { useRef } from "react";
import './Signup.css'
import { auth } from "../fireBase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const fileRef = useRef(null);

  const navigate = useNavigate();

  // const auth = getAuth();

  async function signuphandler() {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const pass = passRef.current.value;
    const file = fileRef.current.value;
    const result = await createUserWithEmailAndPassword(auth, email, pass);
    console.log(result);
    if (result) {
      const currentUser = result.user;
      updateProfile(currentUser, {
        displayName: name,
        photoURL: file,
      })
        .then(() => {
          alert("Account Created");
          navigate("/signin");
        })
        .catch((err) => {
          alert(err.message);
          console.log(err.message);
        });
    }
    alert("user added");
  }

  return (
    <div className="signup_page">
      <h1>SignUp</h1>
      <div className="page_setup">
        <div className="signup_upper_section">
          <input placeholder="Enter name" ref={nameRef} type="text" />
          <input placeholder="Enter email" ref={emailRef} type="email" />
          <input placeholder="Enter Password" ref={passRef} type="password" />
          <input placeholder="Enter image addres" ref={fileRef} type="text" />
        </div>
        <div className="btnn">
          <button
            onClick={() => {
              signuphandler();
            }}
          >
            SignUp
          </button>
          <br />
          <span><button onClick={()=>{
             navigate("/signin");
          }}>Login</button></span>
        </div>
        
      
      </div>
      
    </div>
  );
};

export default Signup;
