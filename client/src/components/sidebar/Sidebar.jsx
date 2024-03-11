import React from 'react'
import "./sidebar.css"
import about from "../../images/about.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {useEffect, useState} from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
      const getCats =async () => {
        const res = await axios.get("/categories")
        setCats(res.data)
      }
      getCats()
  }, [])
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src={about}
          alt=""
        />
        <p>
        At our blog, we strive to create a community where ideas flourish, creativity thrives, and connections are made. Join us on our journey of exploration and discovery.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className='link'  key={c._id}><li className="sidebarListItem">
              {c.name}
            </li></Link>
              
            ))
          }
          
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
