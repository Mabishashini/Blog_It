import React from "react";
import "./Topbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export const Topbar = () => {
  const user = true;
  return (
    <div className="topbar">
      <div className="topleft">
        <div className="topIcon">
          <InstagramIcon />
        </div>
        <div className="topIcon">
          <FacebookIcon />
        </div>
        <div className="topIcon">
          <TwitterIcon />
        </div>
        <div className="topIcon">
          <PinterestIcon />
        </div>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <>
            <img
              className="topImg"
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
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
        <div className="searchIcon">
          <SearchIcon />{" "}
        </div>
      </div>
    </div>
  );
};
