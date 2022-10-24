import React from 'react'
import Online from '../Online/Online'
import "./rightbar.css"
import {Users} from '../../dummyData'

export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return (
      <>
      <div className="birthdayContainer">
        <img src="/assests/gift.jpeg" alt="birthdayImg" className="birthdayImg" />
        <span className="birthdayText"><b>Swastika Mohanty</b> and <b>3 other friends</b> have birthday today.</span>
        </div>
        <img src="/assests/ad.webp" alt="rightbarAd" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
         {
          Users.map((u)=>{
            return <Online key={u.id} user={u} />
          })
         }
        </ul>
      </>
    )
  }

  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Bhubaneswar</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From::</span>
          <span className="rightbarInfoValue">Odisha</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">In a Relationship</span>
        </div>
      </div>
       <h4 className="rightbarTitle">User Friends</h4>
       <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assests/person/p-6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Satyabrata Dash</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assests/person/p-7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Susant Sutar</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assests/person/p-1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Karton Tisuja</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assests/person/p-2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Tabia Tikan</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assests/person/p-3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Chuin Cgaman</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assests/person/p-4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Singer Sukuta</span>
        </div>
       </div>
      </>
    )
  }
  return (
  <>
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile? <ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  </>
  )
}


