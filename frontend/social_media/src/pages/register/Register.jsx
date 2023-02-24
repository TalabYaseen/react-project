import { useState } from "react";
import "./register.css";
import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import UserService from '../../apis/UserService';
import axios from 'axios';

export default function Register() {

  const [errorfname,setErrorsfname]=useState(false)
  const [errorlname,setErrorslname]=useState(false)
  const [erroremail,setErrorsemail]=useState(false)
  const [errorpassword,setErrorspassword]=useState(false)
  const [errorconpassword,setErrorsconpassword]=useState(false)
  const [accept,setAccept]=useState(false)
  const [err , setErr]= useState(null);

  const [data , setdata] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPssword : "",
  });
  const handlechange = (e) => {
    setdata(prev=>({...prev,[e.target.name]:e.target.value}))
    const name=e.target.name;
    const value=e.target.value;
    const namereg = "^[a-zA-Z]{1,15}$"; 
    const passreg = "^.{8,}$";
    const emailreg = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
    switch (name) {
      case 'lastName':
      if (! (value.match(namereg))){
      setErrorslname('Name must contain just letters !')}
      else {setErrorslname(true);
      }
      break;
      case 'firstName':
      if (! (value.match(namereg))){
      setErrorsfname('Name must contain just letters !')}
      else {setErrorsfname(true);
      }
      break;
      case 'email': 
      if (! (value.match(emailreg))){
        setErrorsemail('Wrong email !')}
        else {setErrorsemail(true);
        }
              break;
              case 'password': 
              if (! (value.match(passreg))){
                setErrorspassword('weak password make it stronger !')}else { setErrorspassword(true);}
              break;
              case 'confirmPssword': 
              if (! (data.password === value)){
                setErrorsconpassword('Password don\'t match !')}else { setErrorsconpassword(true);}
              break;
              default:
                  break;
              }
    
  }
  const handlesubmit = async (e) =>{
    e.preventDefault();
    setAccept(true);
    console.log(data);
    if (errorfname && errorlname && erroremail && errorpassword && errorconpassword){
      try{
        UserService.createUser(JSON.stringify(data) );
    } catch(err){
      setErr(err.response.data);
    }
    }
  }

  return (
    <form onSubmit={handlesubmit}>
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
            <FloatingLabel controlId="floatingPassword" label="First name">
            <Form.Control onChange={handlechange} aria-label="First name" placeholder="First name" name="firstName"/>
            </FloatingLabel>  
            <FloatingLabel controlId="floatingPassword" label="Last name">
            <Form.Control onChange={handlechange} aria-label="Last name" placeholder="Last name" name="lastName"/> 
            </FloatingLabel>
        </InputGroup>
        {accept && <p style={{color:"red"}}>{errorfname}</p>}
        <InputGroup className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Email">
            <Form.Control onChange={handlechange} aria-label="email" placeholder="email" name="email"/>
            </FloatingLabel>  
        </InputGroup>
        {accept && <p style={{color:"red"}}>{erroremail}</p>}
        <InputGroup className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" onChange={handlechange} aria-label="password" placeholder="password" name="password"/>
            </FloatingLabel>  
        </InputGroup>
        {accept && <p style={{color:"red"}}>{errorpassword}</p>}
        <InputGroup className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Confirm Password">
            <Form.Control onChange={handlechange} type="password" aria-label="confirmpassword" placeholder="confirmpassword" name="confirmPssword"/>
            </FloatingLabel>  
        </InputGroup>
        {accept && <p style={{color:"red"}}>{errorconpassword}</p>}
            <button type="submit" className="loginButton" >Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
    </form>

  );
}