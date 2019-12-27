import React from 'react'
import './Nav.css'
import {NavLink} from "react-router-dom"


const Navbar =() => {
return <nav className='nav'>
<div className='navbar'>
  <NavLink to="/profile"><h4>Profile</h4></NavLink>
</div>
<div className='butt'>
  <NavLink to="/dialogs"><h4>Messages</h4></NavLink>
</div>
<div className='butt'>
  <NavLink to="/users"><h4>Users</h4></NavLink>
</div>
<div className='butt'>
  <NavLink to="/news"><h4>News</h4></NavLink>
</div>
<div className='butt'>
  <NavLink to="/music"><h4>Music</h4></NavLink>
</div>
<div className='butt'>
  <NavLink to="/settings"><h4>Settings</h4></NavLink>
</div>
</nav>
}


export default Navbar;