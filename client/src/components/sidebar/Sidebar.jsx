import React from 'react'
import "./sidebar.css"
import about from "../../images/about.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={about}
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            
              Life
            
          </li>
          <li className="sidebarListItem">
            Music
          </li>
          <li className="sidebarListItem">
            Style
          </li>
          <li className="sidebarListItem">
            Sport
          </li>
          <li className="sidebarListItem">
            Tech
          </li>
          <li className="sidebarListItem">
            Cinema
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <div className='sidebarIcon'>< InstagramIcon/></div>
            <div className='sidebarIcon'><FacebookIcon/></div>
            <div className='sidebarIcon'><TwitterIcon/></div>
            <div className='sidebarIcon'><PinterestIcon/></div>
        </div>
      </div>
    </div>
  )
}
