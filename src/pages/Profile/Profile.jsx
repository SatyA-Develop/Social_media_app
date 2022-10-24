import React from 'react'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
        <Sidebar/>
        <div className="profileRight">
           <div className="profileRightTop">
            <div className="profileCover">
            <img src="/assests/post/p-4.jpeg" alt="" className="profileCoverImg" />
            <img src="/assests/person/p-5.jpg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName"><b>Swastika Mohanty</b></h4>
                <span className="profileInfoDesc">Hello,This is Satya's wife &hearts;</span>
            </div>
           </div>
           <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
           </div>
        </div>
    
    
    </div>
    </>
    
  )
}
