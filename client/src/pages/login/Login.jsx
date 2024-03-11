import React, { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { useState } from "react";
import Alert from "../../components/Alert/Alert";

export const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false)
  const [usernameerror, setUsernameError] = useState(false)
  const [passworderror, setPasswordError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(userRef.current.value === "" || passwordRef.current.value === ""){
      if(userRef.current.value === "" ){
        setUsernameError(true)
      }
      if(passwordRef.current.value === ""){
        setPasswordError(true)
      }
      return
    }

    dispatch({ type: "LOGIN_START" });

    
    try {
      setError(false)
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true)
    }
  };

  return (
    <div className="login ">
      <div className="container col-10 col-md-4">
        <span className="loginTitle text-center">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your Username"
            className="loginInput"
            ref={userRef}
            onChange={() => setUsernameError(false)}
          />
          {usernameerror && <span className="error">Please fill this field</span>}
          <label> Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="loginInput"
            ref={passwordRef}
            onChange={() => {setPasswordError(false)}}
          />
          {passworderror && <span className="error">Please fill this field</span>}
          <button className="loginButton" disabled={isFetching} type="submit">
            Login
          </button>
          <p className="text-center">Don't have an account?</p>
          <button className="loginRegisterButton">
            <Link to="/register" className="link">
              Register
            </Link>
          </button>

          {error && <Alert type="err" message={"Invalid username or password"} onClose={() => {setError(false)}} ></Alert>}
        </form>
      </div>
    </div>
  );
};
