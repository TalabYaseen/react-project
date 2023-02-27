import "./login.css";
import { useState } from "react";
import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import UserService from '../../apis/UserService';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    const user = {
      email:e.target.email.value,
      password:e.target.password.value,
    }
    UserService.finduser(JSON.stringify(user)).then(function(res){
        if (res.data == "user not found"){
          console.log(res.data);
        }else {
          localStorage.setItem("user",JSON.stringify(res.data));
          navigate("/profile");
        }
      
      // if (res.data == "User created.") {
      //   navigate("/login");
      // }
  })}

  return (
    <form onSubmit={handelsubmit}>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <InputGroup className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Email">
            <Form.Control aria-label="email" placeholder="email" name="email"/>
            </FloatingLabel>  
        </InputGroup>
        
        <InputGroup className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" aria-label="password" placeholder="password" name="password"/>
            </FloatingLabel>  
        </InputGroup>
        {/* {accept && <p style={{color:"red"}}>{erroremailmsg}</p>} */}
            <button type="submit" className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
}