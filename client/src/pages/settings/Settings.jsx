import React, { useContext, useState } from "react";
import "./settings.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userimg from "../../images/userimg.png";
import AddIcon from "@mui/icons-material/Add";
import Alert from "../../components/Alert/Alert";
import DeleteIcon from '@mui/icons-material/Delete';

export const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailformError, setEmailformError] = useState(false);
  const [error, setError] = useState(false)

  const PF = "https://blog-it-8pw8.onrender.com/images/";

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSuccess =() => {
    navigate("/")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      username === "" ||
      password === "" ||
      email === "" ||
      !isValidEmail(email)
    ) {
      if (username === "") {
        setUsernameError(true);
      }
      if (password === "") {
        setPasswordError(true);
      }
      if (email === "") {
        setEmailError(true);
      } else if (!isValidEmail(email)) {
        setEmailformError(true);
      }
      return;
    }

    

    dispatch({ type: "UPDATE_START" });
    const updatedUser = { userId: user._id, username, email, password };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put("/user/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setError(false)
      setSuccess(true);
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
      setError(true)
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("/user/" + user._id, { data: { userId: user._id } });
      alert("User Deleted Successfully");
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleError =() => {
    setError(false)
  }

  return (
    <div className="settings container">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>
            <DeleteIcon/>
          </span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : user.profilePic
                  ? PF + user.profilePic
                  : userimg
              }
              alt=""
            />
            <label htmlFor="fileInput">
              <span className="settingsPPIcon">
                <AddIcon />
              </span>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            autoComplete="off"
            onChange={(e) => (setUsername(e.target.value), setUsernameError(false))}
          />
          {usernameError && (
            <span className="error">Please fill this field</span>
          )}
          <label> Email</label>
          <input
            type="email"
            placeholder={user.email}
            autoComplete="off"
            onChange={(e) => (setEmail(e.target.value), setEmailError(false))}
          />
          {emailError && <span className="error">Please fill this field</span>}
          {emailformError && (
            <span className="error">Please enter a valid Email</span>
          )}
          <label htmlFor="">Password</label>
          <input
            type="password"
            autoComplete="none"
            onChange={(e) => (
              setPassword(e.target.value), setPasswordError(false)
  )}
          />
          {passwordError && (
            <span className="error">Please fill this field</span>
          )}
          <button className="settingsSubmit" type="submit">
            Update Profile
          </button>
          {error && <Alert type="err" message={"Username or Email already Exists!!"} onClose={handleError} ></Alert>}
        
          {success && <Alert type="success" message={"Your Profile has been updated Successfully!!"} onClose={handleSuccess} ></Alert>}
        
        </form>
      </div>
      <Sidebar  />
    </div>
  );
};
