import "./post.css";
import { Link, useLocation } from "react-router-dom";

export const Post = ({ post }) => {
  const PF = "https://blog-it-8pw8.onrender.com/images/";
  return (
    <div className="post">
      {post.photo && <img src={PF + post.photo} alt="" className="postImg" />}

      <div className="postInfo">
        
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <div className="postCategory">

        {post.categories.map((c, index) => (
          <Link to={`/?cat=${c}`} className="link"><span key={index} className="postCat">
          {c}
        </span></Link>
          
        ))}
        </div>

        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};
