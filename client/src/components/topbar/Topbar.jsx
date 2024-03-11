import React, { useContext } from "react";
import "./Topbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Topbar = () => {
  const {user, dispatch} = useContext(Context);

  const PF = "http://localhost:5000/images/"


  const handleLogout =(e) => {
    e.preventDefault()
    dispatch({type : "LOGOUT"})
  }
  return (
    <div className="topbar">
      <div className="topleft">
        <h3 className="topbarTitle">Blog<span className="topbarTitlespan">It</span></h3>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <>
          <Link to="/settings">
          {user.profilePic ? (<img
              className="topImg"
              src={PF + user.profilePic} alt=""
            />) :(<AccountCircleIcon className="topImg"/>)}
          </Link>
            
          </>
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          </>
        )}
       
      </div>
    </div>
  );
};
