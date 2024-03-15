import React from 'react'
import { Header } from '../../components/header/Header'
import { Posts } from '../../components/posts/Posts'
import { Sidebar } from '../../components/sidebar/Sidebar'
import "./home.css"
import axios from "axios"
import {useState, useEffect} from "react"
import { useLocation } from 'react-router-dom'

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/post" + search + "&sort=-createdAt");
        setPosts(res.data);
        console.log(res);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, [search]);
  return (
    <div className='homepage'>
        <Header/>
        <div className="home container">
          <Posts posts = {posts}/>
          <Sidebar/>
        </div>
    </div>
  )
}
