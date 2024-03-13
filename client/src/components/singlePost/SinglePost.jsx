import React, { useContext } from "react";
import "./singlePost.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export const SinglePost = () => {
  const location = useLocation();
  const PF = "https://blog-it-8pw8.onrender.com/images/";
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const { user } = useContext(Context);
const [category, setCategory] = useState([])
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      const res = await axios.get("/post/" + path);
      
      setPost(res.data);
      setCategory(res.data.categories)
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchSinglePost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete("/post/" + path, {
        data: { username: user.username },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/post/" + path, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singlePost container">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            <div className="postCategory">
                {category.map((c, index)=> (
                    <Link to={`/?cat=${c}`} className="link"><span className="postCat">{c}</span></Link>
                ))}
            </div>
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <div
                  className="singlePostIcon"
                  onClick={() => setUpdateMode(true)}
                >
                  <EditIcon />
                </div>
                <div className="singlePostIcon" onClick={handleDelete}>
                  <DeleteIcon />
                </div>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>{" "}
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput writeInput writeText col-12 col-md-10"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            
            Update
          </button>
        )}
      </div>
    </div>
  );
};
