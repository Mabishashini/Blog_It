import React from 'react'
import { Header } from '../../components/header/Header'
import { Posts } from '../../components/posts/Posts'
import { Sidebar } from '../../components/sidebar/Sidebar'
import "./home.css"

export const Home = () => {
  return (
    <div className='homepage'>
        <Header/>
        <div className="home container">
          <Posts/>
          <Sidebar/>
        </div>
    </div>
  )
}
