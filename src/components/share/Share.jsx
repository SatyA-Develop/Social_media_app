import React from 'react'
import './share.css'

export default function Share() {
  return (
    <>
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assests/person/p-5.jpg" alt="" className="shareProfileImg" />
            <input placeholder="What's in your mind Swastika?" className="shareProfileInput" />
        </div>
        <hr className='shareHr' />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <i style={{color:"green"}} className="fa-solid fa-photo-film"></i>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                <i style={{color:"#dd61e8"}} className="fa-solid fa-tag"></i>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                <i style={{color:"#4d820d"}}className="fa-solid fa-location-dot"></i>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                <i style={{color:"#454a35"}} className="fa-solid fa-face-smile"></i>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <div className="shareButton">
                Share
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
