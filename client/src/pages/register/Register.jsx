import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="register ">
      <div className="container col-4">
        <span className="registerTitle text-center">Register</span>
        <form className="registerForm ">
        <label>Username</label>
          <input type="text" placeholder="Enter your Username" className="registerInput" />
          
          <label>Email</label>
          <input type="text" placeholder="Enter your Email" className="registerInput" />
          <label> Password</label>
          <input type="password" placeholder="Enter your Password" className="registerInput"/>
          <button className="registerButton">Register</button>
          <p className="text-center">Already have an account?</p>
        <button className="registerLoginButton">
            <Link to="/login" className="link">Login</Link></button>
        </form>
      </div>
    </div>
  );
};
