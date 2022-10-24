import React from 'react'
import Posts from '../posts/Posts'
import Share from '../share/Share'
import "./feed.css"
import {Post} from '../../dummyData'

export default function Feed() {
  return (
    <>
    <div className='feed'>
     <div className="feedWrapper">
      <Share/>
      {
        Post.map((val)=>{
         return <Posts key={val.id} 
          post={val}
          />
        })
      }
     </div>
    </div>
    </>
  )
}
