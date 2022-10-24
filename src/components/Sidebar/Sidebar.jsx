import React from 'react'
import CloseFriend from '../closefreind/CloseFriend'
import "./sidebar.css"
import {Users} from '../../dummyData'

export default function Sidebar() {
  return (
    <div className='sidebar'>
    <div className="sidebarWrapper">
      <ul className="sidebarList">
           <li className="sidebarItem">
           <i class="fa-solid fa-rss"></i>
           <span className="sidebarItemText">Feed</span>
           </li>
           <li className="sidebarItem">
           <i class="fa-solid fa-message"></i>
           <span className="sidebarItemText">Chat</span>
           </li>
           <li className="sidebarItem">
           <i class="fa-solid fa-video"></i>
           <span className="sidebarItemText">Video</span>
           </li>
           <li className="sidebarItem">
           <i class="fa-solid fa-people-group"></i>
           <span className="sidebarItemText">Groups</span>
           </li>
           <li className="sidebarItem">
           <i class="fa-solid fa-bookmark"></i>
           <span className="sidebarItemText">Bookmarks</span>
           </li>
           <li className="sidebarItem">
           <i class="fa-solid fa-question"></i>
           <span className="sidebarItemText">Questions</span>
           </li>
           <li className="sidebarItem">
           <i class="fa-solid fa-user-doctor"></i>
           <span className="sidebarItemText">Job</span>
           </li>
           <li className="sidebarItem">
           <i class="fa-solid fa-calendar-days"></i>
           <span className="sidebarItemText">Event</span>
           </li>
           <li className="sidebarItem">
           <i class="fa-solid fa-signs-post"></i>
           <span className="sidebarItemText">Posts</span>
           </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className='sidebarHr' />
      <ul className="sidebarFriendList">
        {
          Users.map((u)=>{
            return <CloseFriend key={u.id} user={u}/>
          })
        }
      </ul>
      </div> 
    </div>
  )
}
