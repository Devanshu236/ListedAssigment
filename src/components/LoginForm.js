import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
//import ReactDOM from "react-dom";
import "./LoginPage.css"
import { GoogleLoginButton,AppleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";


const LoginForm = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "joe@gmail.com",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
          navigate('/home');

        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="fp">Forgot Password?</div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
    const handleGoogleLoginResolve = ({ provider, data }) => {
      console.log(provider, data);
      
      navigate('/home'); 
    };
    
    const handleGoogleLoginReject = (err) => {
      console.log(err);
    };
    const navigate=useNavigate();
  return (
     <>
     
      <div className="container"> </div> 
     <div className="hhhh"><h1 className="hhhhh">Sign In</h1>
     <h5>Sign In to your account</h5></div>
     
    <div className='f'>
  
    <LoginSocialGoogle   
      client_id={"833190357657-ec9tciu17ls4aiqme9ng54gtq0kj842r.apps.googleusercontent.com"}
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      onResolve={handleGoogleLoginResolve}
      onReject={handleGoogleLoginReject}
    >
      <GoogleLoginButton className='hh' 
       style={{
             
        color: "grey",
        borderRadius:"12px",
        height:"40px"
      }} />

    </LoginSocialGoogle>
     <LoginSocialGoogle
      client_id={"833190357657-ec9tciu17ls4aiqme9ng54gtq0kj842r.apps.googleusercontent.com"}
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      onResolve={({ provider, data }) => {
        console.log(provider, data);
      }}
      onReject={(err) => {
        console.log(err);
        
      }}
    >
      <AppleLoginButton className='hh'
       style={{
             
        color: "grey",
        borderRadius:"12px",
        height:"40px"
      }}
      />
      
    </LoginSocialGoogle>
    
  </div>
  <div className="f2"> <div className="app">
      <div className="login-form">
       
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <div className="hhh">Do not have an account? <span>Register here</span></div>
    </div></div>
   
  </>
  )
}

export default LoginForm