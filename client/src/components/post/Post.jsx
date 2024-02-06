import "./post.css"
import postImg from "../../images/post.jpg"

export const Post = () => {
  return (
    <div className="post" >
        <img src={postImg} alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
           
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorem pariatur magni quibusdam adipisci facere, reiciendis distinctio accusamus qui illum id natus tempora. Vitae optio dicta impedit magni neque modi nam quod fuga praesentium ab pariatur labore delectus ducimus nulla cupiditate, eum debitis commodi ratione incidunt ullam libero autem nihil!lorem10
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, pariatur!
        </p>
    </div>
  )
}
