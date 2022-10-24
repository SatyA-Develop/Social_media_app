import React from 'react'
import { NavLink } from 'react-router-dom';
import './topbar.css' 

 const Topbar=() =>{
  return (
        <>
       <div className="topbarContainer">
        <div className="topbarleft">
          <span className="logo">Satyabrata</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search for friends,posts and videos" className='searchInput'/>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
          <div className="topbarIconsItem">
      <i className="fa-solid fa-user"></i>
      <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIconsItem">
      <i className="fa-solid fa-message"></i>
      <span className="topbarIconBadge">1</span>
      </div>
      <div className="topbarIconsItem">
      <i className="fa-solid fa-bell"></i>
      <span className="topbarIconBadge">1</span>
      </div>
          </div>
          <NavLink to='/profile'>
          <img src='assests/person/p-5.jpg' alt="" className='topbarImg'/>
          </NavLink>
        </div>
       </div>
    </>
  )
}

export default Topbar ;


