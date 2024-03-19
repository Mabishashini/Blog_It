import React, { useContext,useState } from "react";
import "./Topbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Alert from "../Alert/Alert";

export const Topbar = () => {
  const {user, dispatch} = useContext(Context);
  
  const [write, setWrite] = useState(false);

  const PF = "https://blog-it-8pw8.onrender.com/images/"


  const handleLogout =(e) => {
    e.preventDefault()
    dispatch({type : "LOGOUT"})
  }

  const handleWriteClick =(e) => {
    setWrite(true);

    
  }
  const handleHomeClick =(e) => {
    if(write === true){
      setWrite(false)
    }
  }
  return (
    <div>

    <div className="topbar">
      
      <div className="topleft">
        <h3 className="topbarTitle">Blog<span className="topbarTitlespan">It</span></h3>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link" onClick={handleHomeClick} >
              HOME
            </Link>
          </li>
          
          <li className="topListItem">
            <Link to="/write" className="link" onClick={handleWriteClick}>
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
    <div>
    {!user && write && (
        <Alert
          message={"Please Login to write Blog"}
          type ={"warning"}
          onClose={() => setWrite(false)}
        />
      )}
    </div>
    </div>
  );
};
