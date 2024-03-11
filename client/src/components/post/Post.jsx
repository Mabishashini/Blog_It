import "./post.css"
import {Link, useLocation} from "react-router-dom"

export const Post = ({post}) => {
  const PF = "https://blog-it-8pw8.onrender.com/images/"
  return (
    <div className="post" >
      {
        post.photo && <img src={PF + post.photo} alt="" className="postImg" />
      }
        
        <div className="postInfo">
            <div className="postCats">{
              post.categories.map((c) => {
                <span className="postCat">{c.name}</span>
              })
            }
            </div>
            <Link to={`/post/${post._id}`} className="link">

            <span className="postTitle">{post.title}</span>
            </Link>
           
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
           {post.desc}
        </p>
    </div>
  )
}
