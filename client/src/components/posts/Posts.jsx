import React from 'react'
import "./posts.css"
import { Post } from '../post/Post'

export const Posts = ({posts}) => {
  return (
    <div className='posts'>
      {console.log(posts)}
      {posts.map((p) => (
        
        <Post key ={p._id} post = {p}/>
      ))}
      
      
    </div>
  )
}
