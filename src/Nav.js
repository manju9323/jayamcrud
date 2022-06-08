import React from 'react'
import {NavLink} from 'react-router-dom'


function Nav() {
  return (
     <div className="side">
       <NavLink activeClassName='mmm' className="navi" to="/dashboard">DASHBOARD</NavLink>
    <NavLink activeClassName='mmm' className="navi" to="/home">HOME </NavLink>
    <NavLink activeClassName='mmm' className="navi" to="/profile">ADD NEW PROFILE </NavLink>
    <NavLink activeClassName='mmm' className="navi" to="/editbar/:id">EDIT PROFILE</NavLink>
      </div>
  )
}

export default Nav