import React from "react";
import "./settings.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Settings = () => {
  return (
    <div className="settings container">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <label htmlFor="fileInput">
                <span className="settingsPPIcon"><AccountCircleIcon/></span>
            </label>
            <input type="file" id='fileInput' style={{display:'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Mabisha" autoComplete="off"/>
          <label > Email</label>
          <input type="email" placeholder="mabisha@gmail.com" autoComplete="off"/>
          <label htmlFor="">Password</label>
          <input type="password" autoComplete="none"/>
          <button className="settingsSubmit">Update Profile</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
