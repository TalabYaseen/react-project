import React, { useState } from "react";
// import "";
// import  from "react";
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import UserService from '../apis/UserService';
import { useNavigate,Router } from "react-router-dom";



const Register = () => {
  const navigate = useNavigate();
  const [errorfname,setErrorsfname]=useState(false)
  const [errorlname,setErrorslname]=useState(false)
  const [erroremail,setErrorsemail]=useState(false)
  const [errorpassword,setErrorspassword]=useState(false)
  const [errorconpassword,setErrorsconpassword]=useState(false)
  const [errornamemsg,seterrornamemsg]=useState("")
  const [erroremailmsg,setErrorsemailmsg]=useState("")
  const [errorpasswordmsg,setErrorspasswordmsg]=useState("")
  const [errorconpasswordmsg,setErrorsconpasswordmsg]=useState("")
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
      // console.log(value);
      // console.log(errorfname  , errorlname , erroremail , errorpassword , errorconpassword)
      // console.log(value)
      console.log(data)



    switch (name) {
      case 'firstName':
        if (! (value.match(namereg))){
          seterrornamemsg ('Name must contain just letters !')
          setErrorsfname(false)}
        else {setErrorsfname(true);
          seterrornamemsg ('')
        }
      break;

      case 'lastName':
        if (! (value.match(namereg))){
          seterrornamemsg ('Name must contain just letters !')
          setErrorslname(false)}
          else {setErrorslname(true);
            seterrornamemsg ('')
          }
      break;
      
      case 'email': 
        if (! (value.match(emailreg))){
          setErrorsemailmsg('Wrong email !')
          setErrorsemail(false)}
          else {setErrorsemail(true);
            setErrorsemailmsg('')
          }
      break;

      case 'password': 
        if (! (value.match(passreg))){
          setErrorspasswordmsg('weak password make it stronger !')
          setErrorspassword(false);
        }else { setErrorspassword(true);
          setErrorspasswordmsg('')
        }
        break;
              case 'repssword': 
              if (! (data.password === value)){
                setErrorsconpasswordmsg('Password don\'t match !');
                setErrorsconpassword(false);
              }else { setErrorsconpassword(true);
                setErrorsconpasswordmsg('');
              }
              break;
              default:
                  break;
              }
    
  }
  const handlesubmit =  (e) =>{
    e.preventDefault();
    // console.log("klsdfjglkdx")
    setAccept(true);
    if (errorfname  && errorlname && erroremail && errorpassword && errorconpassword){

       (UserService.createUser(JSON.stringify(data)).then(function(res){
        
        if (res.data == "User created.") {
          document.getElementById('email-repeat').style.display='block';
        }else{
          // console.log(res.data)
         navigate("/login");
      }
      }) );
    

    }
  }

    return (
  <div className="theme-layout">
  <div className="container-fluid pdng0">
    <div className="row merged">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div className="land-featurearea">
          <div className="land-meta">
            <h1>Nashmi</h1>
            <p>
            Nashmi is free to use for as long as you want with two active projects.
            </p>
            <div className="friend-logo">
              <span><img src="images/logo2.png" alt="" /></span>
            </div>
            {/* <a href="#" title className="folow-me">Follow Us on</a> */}
          </div>	
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <div className="login-reg-bg">
          <div className="log-reg-area sign">
            
            <h2 className="log-title">Register</h2>
            <form onSubmit={handlesubmit}>
              <div className="form-group">	
                <input name="firstName"  onChange={handlechange} type="text" id="input" required="required" />
                <label   className="control-label" htmlFor="input">First name</label><i className="mtrl-select" />

                  {accept && <p style={{color:"red"}}>{errornamemsg}</p>}
              </div>

              <div className="form-group">	
              <input name="lastName"  onChange={handlechange} type="text" id="input" required="required" />
              <label  className="control-label" htmlFor="input">Last name</label><i className="mtrl-select" />

              {/* {accept && <p style={{color:"red"}}>{errorlnamemsg}</p>} */}


            </div>
              <div className="form-group">	
              <input name="email"  onChange={handlechange} type="text" id="input" required="required" />
              <label  className="control-label" htmlFor="input">Email</label><i className="mtrl-select" />

              {accept && <p style={{color:"red"}}>{erroremailmsg}</p>}
            </div>
              <div className="form-group">	
                <input name="password"  onChange={handlechange} type="password" required="required" />
                <label  className="control-label" htmlFor="input">Password</label><i className="mtrl-select" />

                {accept && <p style={{color:"red"}}>{errorpasswordmsg}</p>}

              </div>
              <div className="form-group">	
                <input name="repssword"  onChange={handlechange}   type="password" required="required" />
                <label  className="control-label" htmlFor="input">Confirm Password</label><i className="mtrl-select" />

                {accept && <p style={{color:"red"}}>{errorconpasswordmsg}</p>}

              </div>
              
              
              <div className="submit-btns">
                <button type="submit" className="mtr-btn signup" ><span>Register</span></button>
                
              </div>
              <p>Already have an account? <a type="button" href="/Login"><span>Login Now!</span></a></p>
            </form>
          </div>

          {/* <div className="log-reg-area reg">
            <h2 className="log-title">Register</h2>
            <p>
              Don’t use Winku Yet? <a href="#" title>Take the tour</a> or <a href="#" title>Join now</a>
            </p>
            
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Register;
