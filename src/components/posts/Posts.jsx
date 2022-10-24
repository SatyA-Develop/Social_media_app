import React, { useState } from 'react'
import './posts.css'
import {Users} from '../../dummyData'

export default function Posts({post}) {
  const[like,setLike]=useState(post.like);
  const[isLiked,setIsLiked] = useState(true);
  const likeHandler=()=>{
    setLike(isLiked? like+1 : like-1)
    setIsLiked(!isLiked)
  }
  return (
    <>
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u)=>u.id===post?.UserId)[0].profilePicture} alt="postProfileImg" className="postProfileImg" />
            <span className="postUserName">{Users.filter((u)=>u.id===post?.UserId)[0].username}</span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post?.Photo} alt="postImg" className="postImg" />
        </div>
        <div className="postButtom">
          <div className="postButtomLeft">
            <img src="/assests/heart.png" alt="postButtonLeftImg" className="postButtonLeftImg" onClick={likeHandler} />
            <img src="/assests/like.png" alt="postButtonLeftImg" className="postButtonLeftImg" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post?.comment} Comments</span>
            <i class="fa-solid fa-comment"></i>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
