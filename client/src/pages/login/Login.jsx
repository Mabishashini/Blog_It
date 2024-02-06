import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login ">
      <div className="container col-4">
        <span className="loginTitle text-center">Login</span>
        <form className="loginForm ">
          <label>Email</label>
          <input type="text" placeholder="Enter your Email" className="loginInput" />
          <label> Password</label>
          <input type="password" placeholder="Enter your Password" className="loginInput"/>
          <button className="loginButton">Login</button>
          <p className="text-center">Don't have an account?</p>
        <button className="loginRegisterButton">
            <Link to="/register" className="link">Register</Link></button>
        </form>
      </div>
    </div>
  );
};
