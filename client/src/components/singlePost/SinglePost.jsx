import React from 'react'
import "./singlePost.css"
import singlePostImg from "../../images/about.jpg"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const SinglePost = () => {
  return (
    <div className='singlePost container'>
        <div className="singlePostWrapper">
            <img src={singlePostImg} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <div className="singlePostIcon"><EditIcon/></div>
                    <div className="singlePostIcon"><DeleteIcon/></div>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Mabisha</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident numquam eaque ex esse quisquam doloribus sint saepe expedita dolorem, ullam dolorum, alias reiciendis quaerat magni maxime vel possimus nobis facilis quod animi reprehenderit ratione eum ab quas. Vel harum debitis expedita voluptatum! Amet ullam impedit aspernatur, sequi recusandae distinctio tempora quis facilis accusantium dolorum quia consequuntur obcaecati perferendis fuga molestias porro. Consectetur quae ipsa obcaecati omnis laborum ex dolorem beatae tempore expedita nam mollitia, dignissimos pariatur commodi perferendis possimus, quasi libero fuga deserunt sint blanditiis ab adipisci dolores aut illum. Corporis neque, autem aspernatur nemo fugit commodi odio dolores dicta provident dignissimos totam nulla eos assumenda voluptates inventore sit minus voluptatem expedita voluptate fugiat vero vel, necessitatibus molestias! Beatae animi voluptates dolorum aut, quia sint! Odio eligendi harum, dolorum nihil doloremque expedita asperiores assumenda at veritatis commodi culpa, laboriosam suscipit pariatur, esse non! Error accusamus repellendus ex iusto voluptatem dicta rerum perferendis consectetur consequuntur vitae, minus cum cumque provident facere. Architecto inventore ipsam, fugiat est aperiam aliquam obcaecati! Perferendis commodi quas, quibusdam odio a id unde, reiciendis dicta labore velit animi? Tempore est autem ad doloremque, molestiae commodi hic sed quam non ea aspernatur dicta eius nisi, sit dolorem atque.lorem200 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis maiores odio quae eos perferendis molestiae magnam illo error a? Fugit laboriosam doloribus numquam nemo nam laudantium labore tempora quos animi placeat vitae, quisquam laborum. Ad, libero voluptatem aliquam consequatur aut delectus assumenda veniam. Facilis nesciunt corrupti in, soluta aliquam blanditiis veniam cumque. Cupiditate voluptatum distinctio culpa nihil quos iste ab voluptate repudiandae tenetur molestiae laudantium quibusdam, ut sint. Illo tempore dicta sapiente magni praesentium aliquam autem, obcaecati soluta voluptatibus labore, dolor perspiciatis eum esse ullam quam qui laudantium sit! Enim temporibus praesentium assumenda voluptatem aliquid commodi. Enim non sit voluptas cum, unde repellat, itaque temporibus ex eum obcaecati, laborum inventore sed mollitia id dolore adipisci atque voluptatibus iste voluptatem error corrupti tempore rem. Deleniti vel commodi eligendi corrupti esse sunt cum doloribus iste, necessitatibus eius reiciendis id ut nam optio aliquid est dolores ea? Magni, officiis. Doloribus dolore facilis recusandae quaerat animi eaque amet. Perferendis natus optio voluptate molestiae beatae in tenetur? Reiciendis possimus ipsam nisi ex dignissimos qui consequatur tempora! Nemo eos eveniet consequuntur laborum quae veritatis, laudantium sequi ducimus amet sit quos maxime officia repellendus autem, vitae aliquam? Rerum architecto eos ea quos vel tempora magni id inventore.</p>
        </div>
    </div>
  )
}
