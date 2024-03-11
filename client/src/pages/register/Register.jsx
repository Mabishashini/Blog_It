import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailformError, setEmailformError] = useState(false)
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(username === "" || password === "" || email==="" || !isValidEmail(email)){
      if(username === "" ){
        setUsernameError(true)
      }
      if(password === ""){
        setPasswordError(true)
      }
      if(email === ""){
        setEmailError(true)
      }
      else if(!isValidEmail(email)){
        setEmailformError(true)
      }
      return
    }
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      {
        res.data && setSuccess(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  const handleSuccess =() => {
    navigate("/login")
  }

  return (
    <div className="register ">
      <div className="container col-10 col-md-4">
        <span className="registerTitle text-center">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your Username"
            className="registerInput"
            onChange={(e) => (setUsername(e.target.value), setUsernameError(false))}
          />
          {usernameError && <span className="error">Please fill this field</span>}
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="registerInput"
            onChange={(e) => (setEmail(e.target.value), setEmailError(false), setEmailformError(false))}
          />
          {emailError && <span className="error">Please fill this field</span>}
          {emailformError && <span className="error">Please enter a valid Email</span>}
          <label> Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="registerInput"
            onChange={(e) => (setPassword(e.target.value), setPasswordError(false))}
          />
          {passwordError && <span className="error">Please fill this field</span>}
          <button className="registerButton" type="submit">
            Register
          </button>
          <p className="text-center">Already have an account?</p>
          <button className="registerLoginButton">
            <Link to="/login" className="link">
              Login
            </Link>
          </button>
          {error && <Alert type="err" message={"Username or Email already exists"} onClose={() => {setError(false)}} ></Alert>}
          {success && <Alert type="success" message={"Registration successful! You can Login now"} onClose={handleSuccess} ></Alert>}
        </form>
      </div>
    </div>
  );
};
