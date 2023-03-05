// import "./login.css";
import { useState } from "react";
import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import UserService from "../apis/UserService";

// import UserService from '../../apis/UserService';



const Login = () => {

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
        }else 
        {
          localStorage.setItem("user",JSON.stringify(res.data));

          navigate("/home");
        }
      
   
  })}

   return (

    <form onSubmit={handelsubmit}>

    <div className="theme-layout">
        <div className="container-fluid pdng0">
            <div className="row merged">
        
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="login-reg-bg">
            <div className="log-reg-area sign">
              <h2 className="log-title">Login</h2>
                 

                  <div className="form-group">	
                    <input type="text" id="input" name="email" required="required" />
                    <label className="control-label" htmlFor="input"   >Email</label><i className="mtrl-select" />
                  </div>
                  <div className="form-group">	
                    <input name="password"  type="password" required="required" />
                    <label className="control-label" htmlFor="input"  name="password" >Password</label><i className="mtrl-select" />
                  </div>
                  
                  <div className="submit-btns">
                    <button className="mtr-btn signin" type="submit"><span>Login</span></button>
                  </div>

                  <p>Don’t have an account Yet? <a type="button" href="/Register"><span>Register</span></a> now.</p>

              </div>


              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="land-featurearea">
              <div className="land-meta">
                <h1>Nashmi</h1>
                <p>
                Nashmi is free to use for as long as you want with two active projects.
                </p>
                <div className="friend-logo">
                  <span><img src="images/logo2.png" alt="" className="Logo" /></span>
                </div>
                {/* <a href="#" title className="folow-me">Follow Us on</a> */}
              </div>	
            </div>
          </div>
          </div>
        </div>
      </div>

  </form>

    );
}

export default Login;
